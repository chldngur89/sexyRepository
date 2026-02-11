'use client';

import Link from 'next/link';
import { useState } from 'react';
import BottomNav from '@/components/layout/BottomNav';
import DriveGallery from '@/components/DriveGallery';

const stories = [];
const popularContent = [];

export default function Home() {
  const [activeTab, setActiveTab] = useState('Ranking');

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-white dark:bg-background-dark shadow-2xl overflow-x-hidden pb-24">

      {/* Hero Section */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <img
          alt="Landscape hero"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3yQ8WHlzmd7oKYWTjatUC-M6i4QbZsD4b8t4GIQ75mE7KBl3aJv1agtw6o-uHaSEzueOy_ez2MZbNBEE8FXGzqrm0lkCv6hgDVFK9tdRfhf6C4v71IknXSO4XD_YUPPxPrOtCekddbHtDG9cxy8fLxwSsfX0MUNAvPYRSZHJFgScq-LLTVtwW-IQ3hq0V7fY2HNsO7yKZAj0euVqk3JQWPnJBhh8OtmzdQEPWFLgxuxfuC24BBYwXITxIrxFewytY-RRU8pO5zg4"
        />
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center bg-gradient-to-b from-black/40 to-transparent">
          <h1 className="text-white text-2xl font-bold tracking-tight">Antigravity</h1>
          <Link href="/search" className="flex items-center justify-center rounded-full w-10 h-10 bg-white/20 backdrop-blur-md text-white transition-colors hover:bg-white/30">
            <span className="material-symbols-outlined">search</span>
          </Link>
        </div>
      </div>

      {/* Categories / Filter Bar */}
      <div className="border-b border-gray-100 dark:border-gray-800 mt-4 mb-2">
        <div className="flex overflow-x-auto no-scrollbar px-2">
          {[
            { name: 'All', icon: 'grid_view', id: 'All' },
            { name: 'New', icon: 'auto_awesome', id: 'New' },
            { name: 'Popular', icon: 'trending_up', id: 'Popular' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === tab.id
                ? 'border-b-2 border-primary text-primary'
                : 'text-gray-500 dark:text-gray-400 font-medium'
                }`}
            >
              <span className="material-symbols-outlined text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Google Drive Gallery */}
      <DriveGallery />

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
