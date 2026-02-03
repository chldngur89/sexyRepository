import React, { useState } from 'react';
import { ChevronLeft, Download, Share2, Heart, Eye } from 'lucide-react';
import { ImageGallery } from './ImageGallery';
import { ThumbnailStrip } from './ThumbnailStrip';
import { DetailStripBanner } from './DetailStripBanner';
import { SimilarContents } from './SimilarContents';
import { mockContents } from '../data/mockData';
import type { ContentItem } from '../App';

interface DetailPageProps {
  content: ContentItem;
  onBack: () => void;
}

export function DetailPage({ content, onBack }: DetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = content.images[currentImageIndex];
    link.download = `${content.title}_${currentImageIndex + 1}.jpg`;
    link.click();
    
    // Show success toast
    alert('이미지가 저장되었습니다! 📥');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: content.title,
        text: content.description,
        url: window.location.href,
      });
    } else {
      alert('공유 기능이 곧 제공됩니다!');
    }
  };

  const similarContents = mockContents.filter(
    c => c.category === content.category && c.id !== content.id
  ).slice(0, 6);

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Fixed Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white z-10">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={handleShare}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Share2 className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={handleDownload}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Download className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Heart 
              className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
            />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Main Gallery */}
        <ImageGallery
          images={content.images}
          currentIndex={currentImageIndex}
          onIndexChange={setCurrentImageIndex}
          isPremium={content.isPremium}
        />

        {/* Thumbnail Strip */}
        <ThumbnailStrip
          images={content.images}
          currentIndex={currentImageIndex}
          onThumbnailClick={setCurrentImageIndex}
          isPremium={content.isPremium}
        />

        {/* Content Info */}
        <div className="px-4 py-5 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
              {content.category}
            </span>
            {content.isNew && (
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
                NEW
              </span>
            )}
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {content.title}
          </h1>
          
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{content.viewCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span>{Math.floor(content.viewCount * 0.23).toLocaleString()}</span>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Detail Strip Banner */}
        <DetailStripBanner />

        {/* Similar Contents */}
        <SimilarContents contents={similarContents} />
      </div>
    </div>
  );
}
