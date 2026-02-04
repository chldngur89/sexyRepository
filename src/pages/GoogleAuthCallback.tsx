import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useGoogleDrive } from '../context/GoogleDriveContext';

export const GoogleAuthCallback: React.FC = () => {
  const { handleCallback } = useGoogleDrive();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    const processCallback = async () => {
      if (!code) { window.history.replaceState({}, document.title, window.location.pathname); return; }

      try {
        const response = await fetch('https://oauth2.googleapis.com/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            code,
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
            client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET || '',
            grant_type: 'authorization_code',
            redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI || 'https://sexy-repository.vercel.app/google/callback',
          }),
        });

        if (response.ok) {
          const tokens = await response.json();
          handleCallback({ access_token: tokens.access_token });
        }
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    };
    processCallback();
  }, [handleCallback]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-4" />
        <p className="text-gray-600">Google 인증 처리 중...</p>
      </div>
    </div>
  );
};

export default GoogleAuthCallback;
