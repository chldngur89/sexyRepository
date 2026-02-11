import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
    try {
        const { code } = await req.json();

        if (!code) {
            return NextResponse.json({ error: 'Authorization code is missing.' }, { status: 400 });
        }

        // Determine redirect URI based on environment or request host if needed, but usually strictly matching Console
        // For local dev, we assume localhost:3000. For production, it should be the vercel URL.
        // We can check the referer or host header, but for now let's use the explicit env var or default.
        // The user provided https://sexy-repository.vercel.app/google/callback, so that might be the ONLY allowed one if they didn't add localhost.

        const redirectUri = process.env.NEXT_PUBLIC_APP_URL
            ? `${process.env.NEXT_PUBLIC_APP_URL}/google/callback`
            : 'http://localhost:3000/google/callback';

        const oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            redirectUri
        );

        const { tokens } = await oauth2Client.getToken(code);

        return NextResponse.json(tokens);

    } catch (error: any) {
        console.error('Error exchanging OAuth code:', error);
        return NextResponse.json({ error: error.message || 'Failed to exchange code' }, { status: 500 });
    }
}
