const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI || 'https://sexy-repository.vercel.app/google/callback';

const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'].join(' ');

export interface GDriveFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  webContentLink?: string;
  webViewLink?: string;
}

export interface GDriveFolder {
  id: string;
  name: string;
}

export const getAuthUrl = (): string => {
  const params = new URLSearchParams({
    client_id: CLIENT_ID || '',
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: SCOPES,
    access_type: 'offline',
    prompt: 'consent',
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
};

export const getTokensFromCode = async (code: string) => {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID || '',
      client_secret: CLIENT_SECRET || '',
      code,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI,
    }),
  });
  if (!response.ok) throw new Error('Failed to exchange code');
  return response.json();
};

let accessToken: string | null = null;

export const setAccessToken = (token: string) => {
  accessToken = token;
  localStorage.setItem('gdrive_access_token', token);
};

export const getAccessToken = (): string | null => {
  if (!accessToken) accessToken = localStorage.getItem('gdrive_access_token');
  return accessToken;
};

export const clearAccessToken = () => {
  accessToken = null;
  localStorage.removeItem('gdrive_access_token');
};

const driveApiCall = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
  const token = getAccessToken();
  if (!token) throw new Error('Not authenticated');
  const response = await fetch(`https://www.googleapis.com/drive/v3${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!response.ok) throw new Error('API call failed');
  return response.json();
};

export const listFolders = async (): Promise<GDriveFolder[]> => {
  const response = await driveApiCall<{ files: Array<{ id: string; name: string }> }>(
    '/files?q=mimeType%3D%27application%2Fvnd.google-apps.folder%27%20and%20trashed%3Dfalse&fields=files(id%2Cname)&orderBy=name'
  );
  return response.files.map(f => ({ id: f.id, name: f.name }));
};

export const listImagesInFolder = async (folderId: string): Promise<GDriveFile[]> => {
  const query = `'${folderId}' in parents and mimeType starts with 'image/' and trashed=false`;
  const encodedQuery = encodeURIComponent(query);
  const response = await driveApiCall<{
    files: Array<{ id: string; name: string; mimeType: string; thumbnailLink?: string; webContentLink?: string; webViewLink?: string }>
  }>(`/files?q=${encodedQuery}&fields=files(id%2Cname%2CmimeType%2CthumbnailLink%2CwebContentLink%2CwebViewLink)&orderBy=name&pageSize=100`);
  return response.files.map(f => ({
    id: f.id, name: f.name, mimeType: f.mimeType,
    thumbnailLink: f.thumbnailLink, webContentLink: f.webContentLink, webViewLink: f.webViewLink,
  }));
};

export const getImageViewUrl = (fileId: string): string => `https://drive.google.com/uc?export=view&id=${fileId}`;

export const isAuthenticated = (): boolean => !!getAccessToken();

export const signOut = () => clearAccessToken();

export const getUserInfo = async () => {
  const response = await driveApiCall<{ name?: string; email?: string; picture?: { url?: string } }>(
    '/about?fields=name%2Cemail%2CphotoLink'
  );
  return { name: response.name, email: response.email, picture: response.picture?.url };
};
