import { google } from 'googleapis';

const drive = google.drive('v3');

function getAuthClient() {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_DRIVE_REFRESH_TOKEN;
    const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

    if (clientId && clientSecret && refreshToken) {
        // console.log('Using OAuth2 for Google Drive');
        const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
        oauth2Client.setCredentials({ refresh_token: refreshToken });
        return oauth2Client;
    }

    if (apiKey) {
        // console.log('Using API Key for Google Drive');
        return apiKey;
    }

    return null;
}

export async function getDriveImages(folderId: string) {
    try {
        const auth = getAuthClient();

        if (!auth) {
            console.error('No valid Google Drive authentication found (API Key or OAuth).');
            return [];
        }

        const listParams: any = {
            q: `'${folderId}' in parents and (mimeType contains 'image/') and trashed = false`,
            fields: 'files(id, name, webContentLink, webViewLink, thumbnailLink)',
            pageSize: 100,
        };

        if (typeof auth === 'string') {
            listParams.key = auth;
        } else {
            listParams.auth = auth;
        }

        const response = await drive.files.list(listParams);

        return response.data.files || [];
    } catch (error) {
        console.error('Error fetching images from Google Drive:', error);
        return [];
    }
}
