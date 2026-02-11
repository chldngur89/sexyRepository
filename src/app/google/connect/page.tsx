'use client';

export default function GoogleConnectPage() {
    const handleConnect = () => {
        const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '959566277770-tuhnma4m7nd5av4g12nj6pssubg6q9do.apps.googleusercontent.com';
        const REDIRECT_URI = process.env.NEXT_PUBLIC_APP_URL ? `${process.env.NEXT_PUBLIC_APP_URL}/google/callback` : 'http://localhost:3000/google/callback';
        const SCOPE = 'https://www.googleapis.com/auth/drive.readonly';

        const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&access_type=offline&prompt=consent`;

        window.location.href = oauthUrl;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 dark:bg-zinc-900">
            <div className="max-w-md w-full bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg text-center">
                <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Connect Google Drive</h1>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                    To show your photos, we need permission to read your Google Drive files.
                </p>
                <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left">
                    <p className="text-sm text-yellow-700">
                        <strong>Note:</strong> You will be redirected to Google to log in. make sure to allow access.
                    </p>
                </div>
                <button
                    onClick={handleConnect}
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                    <span className="material-symbols-outlined">cloud_upload</span>
                    Connect Google Drive
                </button>
            </div>
        </div>
    );
}
