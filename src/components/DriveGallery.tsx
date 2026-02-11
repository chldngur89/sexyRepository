'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface DriveImage {
    id: string;
    name: string;
    thumbnailLink: string;
    webViewLink: string;
    webContentLink: string;
}

export default function DriveGallery() {
    const [images, setImages] = useState<DriveImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchImages() {
            try {
                const response = await fetch('/api/images');
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                setImages(data.images);
            } catch (err) {
                console.error(err);
                setError('Failed to load images from Drive');
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, []);

    if (loading) return <div className="p-4 text-center text-gray-500 text-sm">Loading Drive images...</div>;
    if (error) return <div className="p-4 text-center text-red-500 text-sm">{error}</div>;
    if (images.length === 0) return null;

    return (
        <section className="py-6">
            <h2 className="px-4 text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500">cloud</span>
                From Google Drive
            </h2>
            <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar pb-2">
                {images.map((image) => (
                    <a
                        key={image.id}
                        href={image.webViewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden shadow-sm relative group"
                    >
                        <img
                            alt={image.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            src={image.thumbnailLink?.replace('=s220', '=s800')} // Request higher quality thumbnail
                            referrerPolicy="no-referrer"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}
