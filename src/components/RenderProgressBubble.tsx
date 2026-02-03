import React from 'react';
import { Loader2 } from 'lucide-react';

interface RenderProgressBubbleProps {
  stage: 'Queued' | 'Rendering frames' | 'Encoding' | 'Saving locally';
  progress: number;
}

export function RenderProgressBubble({ stage, progress }: RenderProgressBubbleProps) {
  return (
    <div className="flex justify-start">
      <div className="w-full max-w-[80%] bg-white border border-gray-200 rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-4 pt-3 pb-2">
          <div className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
            <h3 className="text-sm font-medium text-gray-900">Rendering video…</h3>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4 pb-3">
          <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-blue-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Status */}
        <div className="px-4 pb-3">
          <p className="text-xs text-gray-600">
            {stage} · {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
