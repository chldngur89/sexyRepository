import React from 'react';
import { TrendingUp, Sparkles, Grid3x3, Eye } from 'lucide-react';

interface NavigationTabsProps {
  activeTab: 'ranking' | 'new' | 'category' | 'viewed';
  onTabChange: (tab: 'ranking' | 'new' | 'category' | 'viewed') => void;
}

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  const tabs = [
    { id: 'ranking' as const, label: '실시간 랭킹', icon: TrendingUp },
    { id: 'new' as const, label: '신작', icon: Sparkles },
    { id: 'category' as const, label: '카테고리 추천', icon: Grid3x3 },
    { id: 'viewed' as const, label: '최근 본', icon: Eye },
  ];

  return (
    <div className="flex items-center bg-white border-b border-gray-200 overflow-x-auto">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-3 border-b-2 transition-all ${
              isActive
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span className="text-sm font-medium whitespace-nowrap">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
