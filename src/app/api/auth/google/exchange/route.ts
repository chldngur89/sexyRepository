import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
    try {
        const { code, redirect_uri } = await req.json();

        if (!code) {
            return NextResponse.json({ error: 'Authorization code is missing.' }, { status: 400 });
        }

        // Use the redirect_uri provided by the client (most reliable), or fall back to env var
        const redirectUri = redirect_uri || (process.env.NEXT_PUBLIC_APP_URL
            ? `${process.env.NEXT_PUBLIC_APP_URL}/google/callback`
            : 'http://localhost:3000/google/callback');

        if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
            console.error('Missing Google Client ID or Secret');
            return NextResponse.json({ error: 'Server configuration error: Missing Credentials' }, { status: 500 });
        }

        console.log('Using Redirect URI:', redirectUri);
        console.log('Client ID present:', !!process.env.GOOGLE_CLIENT_ID);
        console.log('Client Secret present:', !!process.env.GOOGLE_CLIENT_SECRET);

        const oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            redirectUri
        );

        const { tokens } = await oauth2Client.getToken(code);

        return NextResponse.json(tokens);

    } catch (error: any) {
        console.error('Error exchanging OAuth code:', error);
        console.error('Error details:', error.response?.data);
        return NextResponse.json({
            error: error.message || 'Failed to exchange code',
            details: error.response?.data
        }, { status: 500 });
    }
}
