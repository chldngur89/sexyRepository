import React from 'react';
import { Gift, ChevronRight } from 'lucide-react';

export function MiddleBanner() {
  return (
    <div className="mx-4 my-4 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl cursor-pointer hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm">
            <Gift className="w-6 h-6 text-white" />
          </div>
          
          <div>
            <p className="text-white font-bold text-sm mb-0.5">
              신규 회원 특별 혜택
            </p>
            <p className="text-indigo-100 text-xs">
              가입하고 무료 크레딧 받기
            </p>
          </div>
        </div>

        <ChevronRight className="w-6 h-6 text-white flex-shrink-0" />
      </div>
    </div>
  );
}
