import React from 'react';
import { ChevronRight, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { ContentItem } from '../App';

interface HorizontalSectionProps {
  title: string;
  subtitle: string;
  contents: ContentItem[];
  onContentClick: (content: ContentItem) => void;
  showBadge?: string;
  showDiscount?: boolean;
}

export function HorizontalSection({ 
  title, 
  subtitle, 
  contents, 
  onContentClick,
  showBadge,
  showDiscount 
}: HorizontalSectionProps) {
  return (
    <div className="bg-white py-5 mb-2">
      {/* Section Header */}
      <div className="flex items-center justify-between px-4 mb-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
          <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
        </div>
        <button className="flex items-center gap-0.5 text-sm text-purple-600 font-medium hover:text-purple-700">
          더보기
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {contents.map((content) => (
          <div
            key={content.id}
            onClick={() => onContentClick(content)}
            className="flex-shrink-0 w-32 cursor-pointer group"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-40 rounded-lg overflow-hidden bg-gray-100 mb-2">
              <ImageWithFallback
                src={content.thumbnail}
                alt={content.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {showBadge && (
                  <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded">
                    {showBadge}
                  </span>
                )}
                {showDiscount && content.discount && (
                  <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded">
                    {content.discount}% OFF
                  </span>
                )}
                {content.isNew && (
                  <span className="px-2 py-0.5 bg-purple-500 text-white text-xs font-bold rounded">
                    NEW
                  </span>
                )}
              </div>

              {/* View Count */}
              <div className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-xs text-white">
                <Eye className="w-3 h-3" />
                <span>{(content.viewCount / 1000).toFixed(0)}K</span>
              </div>
            </div>

            {/* Info */}
            <h3 className="font-medium text-sm text-gray-900 mb-1 truncate">
              {content.title}
            </h3>
            <p className="text-xs text-gray-500 truncate">
              {content.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
