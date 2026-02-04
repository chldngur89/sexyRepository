import React, { useState } from 'react';
import { GoogleDriveGallery } from './GoogleDriveGallery';
import { useGoogleDrive } from '../context/GoogleDriveContext';
import { Button } from './ui/button';
import { Image } from 'lucide-react';
import { ImageGallery } from './ImageGallery';
import { GDriveFile } from '../lib/googleDrive';

interface GoogleDrivePageProps {
  onNavigate: (page: 'main' | 'search' | 'favorites' | 'mypage' | 'login') => void;
}

export const GoogleDrivePage: React.FC<GoogleDrivePageProps> = ({ onNavigate }) => {
  const { images } = useGoogleDrive();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const getImageUrl = (file: GDriveFile): string => {
    if (file.thumbnailLink) return file.thumbnailLink;
    return `https://drive.google.com/thumbnail?id=${file.id}&sz=w800`;
  };

  const imageUrls = images.map(file => getImageUrl(file));

  const handleShowGallery = () => { if (images.length > 0) setShowGallery(true); };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => onNavigate('main')} className="text-gray-600 hover:text-gray-900">← 뒤로</button>
          <h1 className="text-lg font-bold">Google Drive 이미지</h1>
          <div className="w-10" />
        </div>
      </header>
      <main className="p-4">
        {images.length > 0 && (
          <div className="mb-6">
            <Button onClick={handleShowGallery} className="w-full flex items-center justify-center gap-2" variant="default">
              <Image className="w-4 h-4" /> 전체 갤러리 보기 ({images.length}개 이미지)
            </Button>
          </div>
        )}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <GoogleDriveGallery onImagesLoaded={(imgs) => console.log('Loaded images:', imgs.length)} maxImages={20} />
        </div>
      </main>
      {showGallery && images.length > 0 && (
        <div className="fixed inset-0 bg-black z-50">
          <div className="relative h-full">
            <button onClick={() => setShowGallery(false)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white">✕</button>
            <ImageGallery images={imageUrls} currentIndex={galleryIndex} onIndexChange={setGalleryIndex} isPremium={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleDrivePage;
