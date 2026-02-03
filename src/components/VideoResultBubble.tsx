import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { UploadStatusRow } from './UploadStatusRow';

interface VideoResultBubbleProps {
  uploadState: 'uploading' | 'success' | 'error';
}

export function VideoResultBubble({ uploadState }: VideoResultBubbleProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex justify-start">
      <div className="w-full max-w-[80%] bg-white border border-gray-200 rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-4 pt-3 pb-2">
          <h3 className="text-sm font-medium text-gray-900">Done ✅</h3>
        </div>

        {/* Video Player - 100% width of bubble */}
        <div className="relative w-full bg-black">
          {/* Aspect ratio container - 16:9 for landscape */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-contain"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%23111827'/%3E%3Ctext x='50%25' y='50%25' font-family='system-ui' font-size='48' fill='%236B7280' text-anchor='middle' dominant-baseline='middle'%3EVideo Preview%3C/text%3E%3C/svg%3E"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>

            {/* Play/Pause Overlay */}
            <button
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {!isPlaying && (
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
                  <Play className="w-7 h-7 text-gray-900 ml-1" fill="currentColor" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Upload Status Row */}
        <UploadStatusRow state={uploadState} />
      </div>
    </div>
  );
}
