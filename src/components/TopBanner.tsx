import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

export function TopBanner() {
  return (
    <div className="relative h-64 bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80"
        alt="AI Generated Art"
        className="w-full h-full object-cover opacity-80"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="text-xs font-bold text-yellow-400 uppercase tracking-wide">
            AI 추천
          </span>
        </div>
        <h2 className="text-xl font-bold text-white mb-1">
          이번 주 최고의 AI 아트
        </h2>
        <p className="text-sm text-gray-200">
          100만+ 조회수 돌파한 화제작
        </p>
      </div>
    </div>
  );
}
