import React from 'react';
import { Gift, ChevronRight } from 'lucide-react';

export function MiddleBanner() {
  return (
    <div className="mx-4 my-4 p-6 bg-[#E91E63] rounded-sm cursor-pointer shadow-md text-center">
      <p className="text-white/90 text-sm mb-1">
        지금 바로 클릭하고 최고 단계 확인하러 가자!
      </p>
      <h3 className="text-white text-2xl font-bold">
        7단계 &lt; 10단계
      </h3>
    </div>
  );
}
