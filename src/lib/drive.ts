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

export async function getDriveFolders(parentFolderId: string) {
    try {
        const auth = getAuthClient();
        if (!auth) return [];

        const listParams: any = {
            q: `'${parentFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
            fields: 'files(id, name)',
            pageSize: 50,
        };

        if (typeof auth === 'string') {
            listParams.key = auth;
        } else {
            listParams.auth = auth;
        }

        const response = await drive.files.list(listParams);
        return response.data.files || [];
    } catch (error) {
        console.error('Error fetching folders from Google Drive:', error);
        return [];
    }
}

export async function getCategorizedImages(rootFolderId: string) {
    const folders = await getDriveFolders(rootFolderId);

    // Sort folders by name (descending for dates like 2024-02-14, alphabetical otherwise)
    // You might want custom sorting logic later
    folders.sort((a, b) => (b.name || '').localeCompare(a.name || ''));

    const categories = await Promise.all(folders.map(async (folder) => {
        if (!folder.id || !folder.name) return null;

        // Fetch images for this folder
        const images = await getDriveImages(folder.id);

        if (images.length === 0) return null; // Skip empty folders

        return {
            id: folder.id,
            name: folder.name,
            images: images
        };
    }));

    // Filter out nulls (empty folders)
    return categories.filter((c): c is NonNullable<typeof c> => c !== null);
}
