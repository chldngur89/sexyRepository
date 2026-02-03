import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export function DetailStripBanner() {
  return (
    <div className="mx-4 my-4 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl cursor-pointer hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-white fill-white" />
          </div>
          
          <div>
            <p className="text-white font-bold text-sm mb-0.5">
              AI 생성 툴로 직접 만들기
            </p>
            <p className="text-cyan-100 text-xs">
              무료 체험 → MidJourney 바로가기
            </p>
          </div>
        </div>

        <ExternalLink className="w-5 h-5 text-white flex-shrink-0" />
      </div>
    </div>
  );
}
