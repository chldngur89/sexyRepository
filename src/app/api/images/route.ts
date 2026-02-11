import { NextResponse } from 'next/server';
import { getDriveImages } from '@/lib/drive';

export async function GET() {
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!folderId) {
        return NextResponse.json({ error: 'Google Drive Folder ID not configured' }, { status: 500 });
    }

    const images = await getDriveImages(folderId);
    return NextResponse.json({ images });
}
