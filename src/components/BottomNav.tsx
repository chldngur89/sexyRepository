import React from 'react';
import { Home, Search, Heart, User } from 'lucide-react';

export function BottomNav() {
  const navItems = [
    { icon: Home, label: '홈', active: true },
    { icon: Search, label: '검색', active: false },
    { icon: Heart, label: '찜', active: false },
    { icon: User, label: '마이', active: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 shadow-lg">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 py-1 px-4 transition-colors ${item.active ? 'text-[#E91E63]' : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
