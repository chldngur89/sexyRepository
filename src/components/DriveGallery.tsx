'use client';

import { useEffect, useState } from 'react';

interface DriveImage {
    id: string;
    name: string;
    webContentLink?: string;
    webViewLink?: string;
    thumbnailLink?: string;
}

interface Category {
    id: string;
    name: string;
    images: DriveImage[];
}

export default function DriveGallery() {
    const [categories, setCategories] = useState<Category[]>([]);
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

                // Handle both old (flat) and new (categorized) API responses for backward compatibility
                if (data.categories) {
                    setCategories(data.categories);
                } else if (data.images) {
                    // Fallback if API returns flat list (put in a "General" category)
                    setCategories([{ id: 'root', name: 'General', images: data.images }]);
                }
            } catch (err) {
                console.error(err);
                setError('Failed to load images');
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, []);

    if (loading) {
        return (
            <div className="p-4 flex gap-2 overflow-x-auto">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="w-32 h-32 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse flex-shrink-0" />
                ))}
            </div>
        );
    }

    if (error || !categories || categories.length === 0) {
        return null; // Hide section if no images
    }

    return (
        <div className="space-y-8 pb-8 mt-6">
            {categories.map((category) => (
                <section key={category.id} className="space-y-4">
                    <div className="px-6 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h2>
                        {/* <button className="text-sm text-primary font-medium hover:underline">See All</button> */}
                    </div>

                    <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar pb-2">
                        {category.images.map((image) => (
                            <a
                                key={image.id}
                                href={image.webViewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex-shrink-0 w-36 aspect-[3/4] group block"
                            >
                                <img
                                    src={image.thumbnailLink?.replace('=s220', '=s800') || image.webContentLink}
                                    alt={image.name}
                                    className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end p-3">
                                    <p className="text-white text-xs truncate w-full">{image.name}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}
