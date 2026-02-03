import React from 'react';
import { AlertCircle, RotateCw } from 'lucide-react';

interface ErrorStateBubbleProps {
  errorType: 'render' | 'upload';
  message: string;
}

export function ErrorStateBubble({ errorType, message }: ErrorStateBubbleProps) {
  return (
    <div className="flex justify-start">
      <div className="w-full max-w-[80%] bg-white border border-red-200 rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-4 pt-3 pb-2 bg-red-50">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <h3 className="text-sm font-medium text-red-900">
              {errorType === 'render' ? 'Video generation failed' : 'Upload failed'}
            </h3>
          </div>
        </div>

        {/* Error message */}
        <div className="px-4 py-3">
          <p className="text-xs text-gray-700 leading-relaxed">{message}</p>
        </div>

        {/* Retry button */}
        <div className="px-4 pb-3">
          <button className="flex items-center gap-1.5 text-xs font-medium text-red-700 hover:text-red-800 transition-colors">
            <RotateCw className="w-3.5 h-3.5" />
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
