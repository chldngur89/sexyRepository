import React, { useState, useEffect } from 'react';
import { MainPage } from './components/MainPage';
import { DetailPage } from './components/DetailPage';
import { SearchPage } from './components/SearchPage';
import { FavoritesPage } from './components/FavoritesPage';
import { MyPage } from './components/MyPage';
import { LoginPage } from './components/LoginPage';
import { GoogleDrivePage } from './components/GoogleDrivePage';
import { GoogleAuthCallback } from './pages/GoogleAuthCallback';
import { FavoritesProvider } from './context/FavoritesContext';
import { AuthProvider } from './context/AuthContext';
import { GoogleDriveProvider } from './context/GoogleDriveContext';

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
  const [currentPage, setCurrentPage] = useState<'main' | 'detail' | 'search' | 'favorites' | 'mypage' | 'login' | 'google-drive' | 'google-callback'>('main');
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [contents, setContents] = useState<ContentItem[]>([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('code')) setCurrentPage('google-callback');
  }, []);

  useEffect(() => {
    import('./lib/api').then(({ fetchContents }) => { fetchContents().then(setContents); });
  }, []);

  const handleContentClick = (content: ContentItem) => { setSelectedContent(content); setCurrentPage('detail'); };
  const handleBackToMain = () => { setCurrentPage('main'); setSelectedContent(null); };
  const handleNavigate = (page: 'main' | 'search' | 'favorites' | 'mypage' | 'google-drive') => {
    setCurrentPage(page);
    if (page !== 'detail') setSelectedContent(null);
  };

  return (
    <AuthProvider>
      <GoogleDriveProvider>
        <FavoritesProvider>
          <div className="min-h-screen bg-gray-100">
            <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
              {currentPage === 'main' && <MainPage onContentClick={handleContentClick} onNavigate={handleNavigate} />}
              {currentPage === 'detail' && selectedContent && <DetailPage content={selectedContent} onBack={handleBackToMain} />}
              {currentPage === 'search' && <SearchPage onNavigate={handleNavigate} />}
              {currentPage === 'favorites' && <FavoritesPage onNavigate={handleNavigate} onContentClick={handleContentClick} />}
              {currentPage === 'mypage' && <MyPage onNavigate={handleNavigate} />}
              {currentPage === 'login' && <LoginPage onNavigate={handleNavigate} />}
              {currentPage === 'google-drive' && <GoogleDrivePage onNavigate={handleNavigate} />}
              {currentPage === 'google-callback' && <GoogleAuthCallback />}
            </div>
          </div>
        </FavoritesProvider>
      </GoogleDriveProvider>
    </AuthProvider>
  );
}
