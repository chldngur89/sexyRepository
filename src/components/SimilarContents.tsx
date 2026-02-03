import React from 'react';
import { Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { ContentItem } from '../App';

interface SimilarContentsProps {
  contents: ContentItem[];
}

export function SimilarContents({ contents }: SimilarContentsProps) {
  return (
    <div className="px-4 py-5 bg-gray-50">
      <h2 className="text-lg font-bold text-gray-900 mb-4">비슷한 콘텐츠</h2>
      
      <div className="grid grid-cols-3 gap-2">
        {contents.map((content) => (
          <div
            key={content.id}
            className="cursor-pointer group"
          >
            <div className="relative w-full h-32 rounded-lg overflow-hidden bg-gray-200 mb-2">
              <ImageWithFallback
                src={content.thumbnail}
                alt={content.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* View Count */}
              <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-xs text-white">
                <Eye className="w-3 h-3" />
                <span>{(content.viewCount / 1000).toFixed(0)}K</span>
              </div>
            </div>
            
            <h3 className="font-medium text-xs text-gray-900 truncate">
              {content.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
