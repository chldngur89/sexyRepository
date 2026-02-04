import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroBanner() {
    return (
        <div className="relative h-[480px] bg-gray-100 overflow-hidden">
            <ImageWithFallback
                src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80"
                alt="Main Model"
                className="w-full h-full object-cover"
            />
        </div>
    );
}
