import React from 'react';
import { Eye, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { ContentItem } from '../App';

interface RankingListProps {
  contents: ContentItem[];
  onContentClick: (content: ContentItem) => void;
}

export function RankingList({ contents, onContentClick }: RankingListProps) {
  return (
    <div className="bg-white py-4">
      <div className="px-4 mb-3">
        <h2 className="text-lg font-bold text-gray-900">Top 5 인기 콘텐츠</h2>
      </div>
      
      <div className="space-y-2">
        {contents.map((content) => (
          <div
            key={content.id}
            onClick={() => onContentClick(content)}
            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-colors"
          >
            {/* Rank Badge */}
            <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
              content.rank === 1 
                ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white' 
                : content.rank === 2
                ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-white'
                : content.rank === 3
                ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}>
              {content.rank}
            </div>

            {/* Thumbnail */}
            <div className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
              <ImageWithFallback
                src={content.thumbnail}
                alt={content.title}
                className="w-full h-full object-cover"
              />
              {content.isPremium && (
                <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-black/70 backdrop-blur-sm rounded text-xs font-bold text-yellow-400">
                  PRO
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                {content.title}
              </h3>
              <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                {content.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{content.viewCount.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5" />
                  <span>{Math.floor(content.viewCount * 0.23).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Bookmark Icon */}
            <button className="flex-shrink-0 p-2 hover:bg-gray-200 rounded-full transition-colors">
              <Heart className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
