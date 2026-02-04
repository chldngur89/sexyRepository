import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { BottomNav } from './BottomNav';

interface SearchPageProps {
  onNavigate: (page: 'main' | 'search' | 'favorites' | 'mypage') => void;
}

export function SearchPage({ onNavigate }: SearchPageProps) {
  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-xl font-bold text-gray-900">검색</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input type="text" placeholder="검색어를 입력하세요" className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500" />
        </div>
        <div className="text-center text-gray-500 py-12">
          <SearchIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>검색어를 입력하여<br />원하는 콘텐츠를 찾아보세요</p>
        </div>
      </div>
      <BottomNav currentPage="search" onNavigate={onNavigate} />
    </div>
  );
}
