import React from 'react';
import { Crown, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StripBanner() {
  return (
    <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 overflow-hidden cursor-pointer hover:from-amber-600 hover:to-orange-600 transition-all">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm">
            <Crown className="w-5 h-5 text-white fill-white" />
          </div>
          
          <div className="flex-1">
            <p className="text-sm font-bold text-white leading-tight">
              프리미엄 무제한 이용
            </p>
            <p className="text-xs text-amber-100">
              첫 달 50% 할인 특가
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/50 shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80"
              alt="Premium"
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronRight className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
}
