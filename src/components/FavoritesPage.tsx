import React from 'react';
import { Heart } from 'lucide-react';
import { BottomNav } from './BottomNav';
import type { ContentItem } from '../App';

interface FavoritesPageProps {
  onNavigate: (page: 'main' | 'search' | 'favorites' | 'mypage') => void;
  onContentClick: (content: ContentItem) => void;
}

export function FavoritesPage({ onNavigate }: FavoritesPageProps) {
  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-xl font-bold text-gray-900">찜</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="text-center text-gray-500 py-12">
          <Heart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>찜한 콘텐츠가 없어요</p>
          <p className="text-sm mt-2">마음에 드는 콘텐츠를 찜해보세요</p>
        </div>
      </div>
      <BottomNav currentPage="favorites" onNavigate={onNavigate} />
    </div>
  );
}
