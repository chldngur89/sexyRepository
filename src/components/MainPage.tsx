import React, { useState } from 'react';
import { StatusBar } from './StatusBar';
import { TopBanner } from './TopBanner';
import { StripBanner } from './StripBanner';
import { NavigationTabs } from './NavigationTabs';
import { RankingList } from './RankingList';
import { HorizontalSection } from './HorizontalSection';
import { MiddleBanner } from './MiddleBanner';
import { BottomNav } from './BottomNav';
import { mockContents } from '../data/mockData';
import type { ContentItem } from '../App';

interface MainPageProps {
  onContentClick: (content: ContentItem) => void;
}

export function MainPage({ onContentClick }: MainPageProps) {
  const [activeTab, setActiveTab] = useState<'ranking' | 'new' | 'category' | 'viewed'>('ranking');

  const topRankedContents = mockContents.filter(c => c.rank && c.rank <= 5);
  const freeContents = mockContents.filter(c => c.isFree);
  const discountContents = mockContents.filter(c => c.discount);
  const recommendedContents = mockContents.filter(c => c.category === 'Fantasy' || c.category === 'Sci-Fi');

  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <StatusBar />
        <TopBanner />
        <StripBanner />
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Ranking List */}
        <RankingList 
          contents={topRankedContents} 
          onContentClick={onContentClick}
        />

        {/* Personalized Section */}
        <HorizontalSection
          title="당신을 위해 모았어요"
          subtitle="최근 본 콘텐츠 기반 추천"
          contents={recommendedContents}
          onContentClick={onContentClick}
        />

        {/* Middle Banner */}
        <MiddleBanner />

        {/* Free Section */}
        <HorizontalSection
          title="이번 주 무료"
          subtitle="조회수 적은 숨은 명작들"
          contents={freeContents}
          onContentClick={onContentClick}
          showBadge="FREE"
        />

        {/* Discount Section */}
        <HorizontalSection
          title="지금 할인 중"
          subtitle="인기 콘텐츠 특가"
          contents={discountContents}
          onContentClick={onContentClick}
          showDiscount
        />
      </div>

      {/* Fixed Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
