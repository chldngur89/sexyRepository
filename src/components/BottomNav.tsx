import React from 'react';
import { Home, Search, Heart, User } from 'lucide-react';

interface BottomNavProps {
  currentPage: 'main' | 'search' | 'favorites' | 'mypage';
  onNavigate: (page: 'main' | 'search' | 'favorites' | 'mypage') => void;
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'main' as const, icon: Home, label: '홈' },
    { id: 'search' as const, icon: Search, label: '검색' },
    { id: 'favorites' as const, icon: Heart, label: '찜' },
    { id: 'mypage' as const, icon: User, label: '마이' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button key={item.id} onClick={() => onNavigate(item.id)} className={`flex flex-col items-center gap-1 py-1 px-4 transition-colors ${isActive ? 'text-[#E91E63]' : 'text-gray-500 hover:text-gray-700'}`}>
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
