import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroBannerProps {
  imageUrl?: string;
}

export function HeroBanner({ imageUrl }: HeroBannerProps) {
  const defaultImageUrl = 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80';

  return (
    <div className="relative h-[480px] bg-gray-100 overflow-hidden flex items-center justify-center">
      <ImageWithFallback
        src={imageUrl || defaultImageUrl}
        alt="Main Model"
        className="w-auto h-auto max-w-full max-h-full object-contain"
      />
    </div>
  );
}
