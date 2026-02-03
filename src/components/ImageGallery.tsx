import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageGalleryProps {
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  isPremium: boolean;
}

export function ImageGallery({ images, currentIndex, onIndexChange, isPremium }: ImageGalleryProps) {
  const [showPremiumPrompt, setShowPremiumPrompt] = useState(false);
  const isBlurred = isPremium && currentIndex >= 7;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      if (currentIndex === 6 && isPremium) {
        setShowPremiumPrompt(true);
        setTimeout(() => setShowPremiumPrompt(false), 3000);
      }
      onIndexChange(currentIndex + 1);
    }
  };

  return (
    <div className="relative bg-black">
      {/* Main Image */}
      <div className="relative w-full" style={{ paddingBottom: '133.33%' }}>
        <ImageWithFallback
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-contain ${
            isBlurred ? 'blur-md' : ''
          }`}
        />

        {/* Blur Overlay for Premium Content */}
        {isBlurred && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="text-center px-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                프리미엄 콘텐츠
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                8번째 이미지부터는 구독이 필요해요
              </p>
              <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
                지금 구독하기
              </button>
            </div>
          </div>
        )}

        {/* Premium Prompt Toast */}
        {showPremiumPrompt && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full shadow-lg animate-bounce">
            🔒 다음은 프리미엄 콘텐츠예요
          </div>
        )}

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full">
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}
