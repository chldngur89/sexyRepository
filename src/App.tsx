import React, { useState } from 'react';
import { MainPage } from './components/MainPage';
import { DetailPage } from './components/DetailPage';

export interface ContentItem {
  id: number;
  rank?: number;
  title: string;
  description: string;
  category: string;
  viewCount: number;
  thumbnail: string;
  images: string[];
  isPremium: boolean;
  isNew?: boolean;
  isFree?: boolean;
  discount?: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'detail'>('main');
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [contents, setContents] = useState<ContentItem[]>([]);

  // Import locally to avoid circular dependency issues if any
  // But ideally should be imported at top level. Let's rely on standard imports.

  React.useEffect(() => {
    // Dynamic import to avoid issues during SSR or initial load if needed, 
    // but standard import is fine for client-side React.
    import('./lib/api').then(({ fetchContents }) => {
      fetchContents().then(setContents);
    });
  }, []);

  const handleContentClick = (content: ContentItem) => {
    setSelectedContent(content);
    setCurrentPage('detail');
  };

  const handleBackToMain = () => {
    setCurrentPage('main');
    setSelectedContent(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile App Container */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
        {currentPage === 'main' && (
          <MainPage onContentClick={handleContentClick} />
        )}

        {currentPage === 'detail' && selectedContent && (
          <DetailPage
            content={selectedContent}
            onBack={handleBackToMain}
          />
        )}
      </div>
    </div>
  );
}
