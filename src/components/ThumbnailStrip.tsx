import React from 'react';
import { Lock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ThumbnailStripProps {
  images: string[];
  currentIndex: number;
  onThumbnailClick: (index: number) => void;
  isPremium: boolean;
}

export function ThumbnailStrip({ images, currentIndex, onThumbnailClick, isPremium }: ThumbnailStripProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3 bg-gray-50 border-b border-gray-200 scrollbar-hide">
      {images.map((image, index) => {
        const isActive = index === currentIndex;
        const isLocked = isPremium && index >= 7;
        const shouldFade = index === 3; // 4th thumbnail faded

        return (
          <button
            key={index}
            onClick={() => !isLocked && onThumbnailClick(index)}
            className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              isActive 
                ? 'border-purple-600 scale-105' 
                : 'border-transparent hover:border-gray-300'
            } ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <ImageWithFallback
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-full h-full object-cover ${
                isLocked ? 'blur-sm' : ''
              } ${shouldFade ? 'opacity-40' : ''}`}
            />

            {isLocked && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Lock className="w-4 h-4 text-white" />
              </div>
            )}

            {shouldFade && !isLocked && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-1">
                <span className="text-xs text-white font-medium">+{images.length - 3}</span>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
