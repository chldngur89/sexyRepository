'use client';

import { Suspense, useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

function CallbackContent() {
    const searchParams = useSearchParams();
    const code = searchParams.get('code');
    const error = searchParams.get('error');
    const [status, setStatus] = useState('Initializing...');
    const [tokens, setTokens] = useState<any>(null);

    const fetchedRef = useRef(false);

    useEffect(() => {
        if (fetchedRef.current) return; // Prevent double execution
        if (error) {
            setStatus(`Error from Google: ${error}`);
            return;
        }
        if (!code) {
            setStatus('No code found in URL.');
            return;
        }

        fetchedRef.current = true;
        setStatus('Exchanging code for tokens...');

        // Dynamic redirect URI based on current location
        // This ensures the backend uses the exact same URI that Google redirected to
        const currentRedirectUri = `${window.location.origin}/google/callback`;

        // Call our own API to exchange code for tokens
        fetch('/api/auth/google/exchange', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                code,
                redirect_uri: currentRedirectUri
            }),
        })
            .then(async (res) => {
                const data = await res.json();
                if (res.ok) {
                    setTokens(data);
                    setStatus('Success!');
                } else {
                    setStatus(`Failed to exchange code: ${data.error || 'Unknown error'}`);
                }
            })
            .catch((err) => {
                setStatus(`Network error: ${err.message}`);
            });
    }, [code, error]);

    return (
        <div className="p-8 max-w-2xl mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-lg mt-10">
            <h1 className="text-2xl font-bold mb-4">Google OAuth Setup Helper</h1>

            <div className="mb-6 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                <p className="font-semibold">Status: <span className={status === 'Success!' ? 'text-green-600' : 'text-amber-600'}>{status}</span></p>
            </div>

            {tokens && (
                <div className="space-y-6">
                    <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10">
                        <h3 className="font-bold text-green-700 dark:text-green-400 mb-2">✅ Setup Complete!</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            Copy the <strong>Refresh Token</strong> below and add it to your <code>.env.local</code> file as <code>GOOGLE_DRIVE_REFRESH_TOKEN</code>.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Refresh Token (Save this!)</label>
                        <div className="relative">
                            <pre className="p-4 bg-gray-900 text-green-400 rounded-lg overflow-x-auto text-xs font-mono">
                                {tokens.refresh_token || "No refresh token returned. Did you revoke access first?"}
                            </pre>
                        </div>
                        {!tokens.refresh_token && (
                            <p className="text-xs text-red-500 mt-1">
                                Note: Google only returns a Refresh Token on the <strong>first</strong> authorization.
                                Go to <a href="https://myaccount.google.com/permissions" target="_blank" className="underline">Google Permissions</a>, remove this app, and try again to get a new Refresh Token.
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium">Access Token (Temporary)</label>
                        <pre className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg overflow-x-auto text-xs text-gray-500">
                            {tokens.access_token}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function GoogleCallbackPage() {
    return (
        <Suspense fallback={<div className="p-8">Loading...</div>}>
            <CallbackContent />
        </Suspense>
    );
}
