import { getDriveImages } from './src/lib/drive';
import fs from 'fs';
import path from 'path';

// Manually load environment variables from .env.local
try {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
        const envConfig = fs.readFileSync(envPath, 'utf8');
        envConfig.split('\n').forEach((line) => {
            const match = line.match(/^([^=]+)=(.*)$/);
            if (match) {
                const key = match[1].trim();
                const value = match[2].trim().replace(/^["']|["']$/g, ''); // Remove quotes if present
                process.env[key] = value;
            }
        });
    }
} catch (e) {
    console.error('Failed to load .env.local', e);
}

async function verify() {
    console.log('Testing Google Drive Connection...');
    console.log('Folder ID:', process.env.GOOGLE_DRIVE_FOLDER_ID);

    try {
        const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
        if (!folderId) throw new Error('No Folder ID found');

        const images = await getDriveImages(folderId);

        if (images.length > 0) {
            console.log(`✅ Success! Found ${images.length} images.`);
            console.log('First image:', images[0].name);
        } else {
            console.log('⚠️  Connection successful, but no images found in the folder.');
        }
    } catch (error) {
        console.error('❌ Connection Failed:', error);
    }
}

verify();
