'use client';

import Link from 'next/link';
import { useState } from 'react';
import BottomNav from '@/components/layout/BottomNav';
import DriveGallery from '@/components/DriveGallery';

const stories = [
  { id: 1, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuNz1bT-yN4_JGt05VT18IriTxioAtzNqRAiF2T9jFolMeZa52UmifjCGe9jx2iaEY5JhOMjWIdlLEmKA_ZDFGQNrvrMOQA98PaFGxW5b6DUP-TjNERYLKF7T552OCHzPtg7bVu19xOA4kuzdPx0HlLkPRS_GkYVhpoV-7SygZ_MzAwsVpiOUJ3ZxSR_gQsffuMYL-MVF-Sai4SW7KkZ4rk_-bZz5lJ6-axSthONnwrnmJe2Fjxy33Fu9tUkq6Rkz0K2K7CDFKOFs", alt: "Thumb 1" },
  { id: 2, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGUlyeDCtNLi3uJ7zfElIiizIGG3h2dJIXN8F4jPKi4cc3YXnX1M1Um95H5nAMj9RcukFLA_fpM0TUM3Qa5-IId4ILCEyt39Yv9jsYB0tjvodRcAw9LOuvrBGmQNZQ_gjqprrmd-i3918z2Mli90X3NeVTekOWsj6i5HeQLTd-sZvbDRdzxOFEDXw3x0zR9Ix9vGp2CflUnx8zNBLxgplRpSzlBAkpMl_Z6H2seOEhFvq_T7dSBAhQImwLmkW0KPUxqasb4ijqPWc", alt: "Thumb 2" },
  { id: 3, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRHKoqpCGf4akWksevuIb00gzn1u7gsyDJwLT2yEzyTxxKVpkUeKGoTUHUXnlG6Tz7WCq6O-wzmAqu769uF0UkwYqg3KILfTjGvtF3hVhsoAJCMBnWQpLiK29jV_LcMB-p2bXrM4vhkNNOB5BH9VDcuDjJmfHadKxfMptBOWTKCeeOylPKFUNdoDH4nFo8SOLBWAvUgZeR8pAkfMmsK8JNdUlWbiNu4ni6OMX8P7FeY-vmAdN4i_mwcvoScZMgErxQxWsvLHyN2VU", alt: "Thumb 3" },
  { id: 4, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB09Z7SRIF49Hy1Aghtknn7qQK97lXWwlcq9ux6kKBzsPxRXTecem5ZTSPUCD1-DqO87bR9gA7kOh1bmu5IuSwHDlkVyuYbmFhVaFbshc3yydCXb3lc9Cgwz7VyVJcwQaewqfn--oqTBs6AlWDdbd0M2rK7uldIsUcPHMIde7hf-VDtsTiQAWXY45YENz6je43446SZC0ebffXWDSzEVIzztgVwf8YBEVPe2U-OXa7DD1GACb5OnSraj3uifBoUp7shp2MG3Hguwjw", alt: "Thumb 4", count: "+7" },
  { id: 5, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc0PysRMsN_qx5KbY-RtBiSvrtMzjkhUilAXIo5-FPnmERtBEz2w2jAZEZJe_Fb2WZakrHHTM3bH5kyI8FYfbMLxDe3vls4ZwANtEljAVUCn0xOn5E_YeU2RrjAUDTLgUzLQ--IB3sUWHXuezMjk3VRGzv7W2A5DNOmQH368lRJjVYeU9A4H5Ojr4GUs9BPUGr_ilWdaZpMOAhizs7VSZ48id8JiQdCaOsXd-Xi2i2kvDRGqNVkBZn145GNpE8R2NfAgEI2QQjFhI", alt: "Thumb 5" },
  { id: 6, src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3yQ8WHlzmd7oKYWTjatUC-M6i4QbZsD4b8t4GIQ75mE7KBl3aJv1agtw6o-uHaSEzueOy_ez2MZbNBEE8FXGzqrm0lkCv6hgDVFK9tdRfhf6C4v71IknXSO4XD_YUPPxPrOtCekddbHtDG9cxy8fLxwSsfX0MUNAvPYRSZHJFgScq-LLTVtwW-IQ3hq0V7fY2HNsO7yKZAj0euVqk3JQWPnJBhh8OtmzdQEPWFLgxuxfuC24BBYwXITxIrxFewytY-RRU8pO5zg4", alt: "Thumb 6", active: true },
];

const popularContent = [
  {
    rank: 1,
    title: "Neon Valley Visions",
    subtitle: "AI-generated ethereal landscapes",
    views: "1,250,000",
    likes: "287,500",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuNz1bT-yN4_JGt05VT18IriTxioAtzNqRAiF2T9jFolMeZa52UmifjCGe9jx2iaEY5JhOMjWIdlLEmKA_ZDFGQNrvrMOQA98PaFGxW5b6DUP-TjNERYLKF7T552OCHzPtg7bVu19xOA4kuzdPx0HlLkPRS_GkYVhpoV-7SygZ_MzAwsVpiOUJ3ZxSR_gQsffuMYL-MVF-Sai4SW7KkZ4rk_-bZz5lJ6-axSthONnwrnmJe2Fjxy33Fu9tUkq6Rkz0K2K7CDFKOFs",
    pro: true,
    liked: false
  },
  {
    rank: 2,
    title: "Alpine Serenity",
    subtitle: "Pristine morning in the mountains",
    views: "982,000",
    likes: "154,200",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGUlyeDCtNLi3uJ7zfElIiizIGG3h2dJIXN8F4jPKi4cc3YXnX1M1Um95H5nAMj9RcukFLA_fpM0TUM3Qa5-IId4ILCEyt39Yv9jsYB0tjvodRcAw9LOuvrBGmQNZQ_gjqprrmd-i3918z2Mli90X3NeVTekOWsj6i5HeQLTd-sZvbDRdzxOFEDXw3x0zR9Ix9vGp2CflUnx8zNBLxgplRpSzlBAkpMl_Z6H2seOEhFvq_T7dSBAhQImwLmkW0KPUxqasb4ijqPWc",
    pro: false,
    liked: false
  },
  {
    rank: 3,
    title: "The Silent Forest",
    subtitle: "Light rays through ancient pines",
    views: "743,500",
    likes: "92,100",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRHKoqpCGf4akWksevuIb00gzn1u7gsyDJwLT2yEzyTxxKVpkUeKGoTUHUXnlG6Tz7WCq6O-wzmAqu769uF0UkwYqg3KILfTjGvtF3hVhsoAJCMBnWQpLiK29jV_LcMB-p2bXrM4vhkNNOB5BH9VDcuDjJmfHadKxfMptBOWTKCeeOylPKFUNdoDH4nFo8SOLBWAvUgZeR8pAkfMmsK8JNdUlWbiNu4ni6OMX8P7FeY-vmAdN4i_mwcvoScZMgErxQxWsvLHyN2VU",
    pro: true,
    liked: true
  }
];

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

      {/* Stories / Thumbnails */}
      <div className="flex gap-3 px-4 py-6 overflow-x-auto no-scrollbar">
        {stories.map((story) => (
          <Link href={`/photo/${story.id}`} key={story.id}>
            <div
              className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden shadow-sm relative ${story.active ? 'border-2 border-primary' : ''}`}
            >
              <img
                alt={story.alt}
                className={`w-full h-full object-cover ${story.count ? 'opacity-60' : ''}`}
                src={story.src}
              />
              {story.count && (
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm bg-black/30">
                  {story.count}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Google Drive Gallery */}
      <DriveGallery />

      {/* Categories / Filter Bar */}
      <div className="border-b border-gray-100 dark:border-gray-800">
        <div className="flex overflow-x-auto no-scrollbar px-2">
          {[
            { name: 'Real-time Ranking', icon: 'trending_up', id: 'Ranking' },
            { name: 'New', icon: 'auto_awesome', id: 'New' },
            { name: 'Category Recommendation', icon: 'grid_view', id: 'Category' },
            { name: 'Recently Viewed', icon: 'visibility', id: 'Recent' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-3 text-sm font-semibold transition-colors ${activeTab === tab.id
                ? 'border-b-2 border-black dark:border-white text-black dark:text-white'
                : 'text-gray-500 dark:text-gray-400 font-medium'
                }`}
            >
              <span className="material-symbols-outlined text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Content List */}
      <section className="p-6">
        <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Top 5 Popular Content</h2>
        <div className="space-y-6">
          {popularContent.map((item) => (
            <div key={item.rank} className="flex items-center gap-4">
              <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center font-bold text-sm ${item.rank === 1 ? 'bg-orange-500 text-white rounded-full' : 'text-gray-400'}`}>
                {item.rank}
              </div>
              <Link href={`/photo/${item.rank}`} className="relative w-24 h-24 flex-shrink-0 block">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover rounded-2xl shadow-sm"
                  src={item.image}
                />
                {item.pro && (
                  <span className="absolute top-1.5 left-1.5 bg-black/60 text-yellow-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-yellow-400/30">PRO</span>
                )}
              </Link>
              <div className="flex-1 min-w-0">
                <Link href={`/photo/${item.rank}`}>
                  <h3 className="font-bold text-gray-900 dark:text-white truncate">{item.title}</h3>
                </Link>
                <p className="text-xs text-gray-500 mt-1 truncate">{item.subtitle}</p>
                <div className="flex items-center gap-3 mt-2 text-gray-400 text-[11px]">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> {item.views}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">favorite</span> {item.likes}</span>
                </div>
              </div>
              <button className={`${item.liked ? 'text-red-500' : 'text-gray-300 hover:text-red-500'} transition-colors`}>
                <span className={`material-symbols-outlined ${item.liked ? 'active-icon' : ''}`}>favorite</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
