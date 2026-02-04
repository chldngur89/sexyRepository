import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles } from 'lucide-react';

export function TopBanner() {
  return (
    <div className="relative h-[60px] bg-[#E91E63] flex items-center justify-between px-4">
      {/* Left: LOGO */}
      <h1 className="text-white text-xl font-extrabold tracking-wide">LOGO</h1>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
