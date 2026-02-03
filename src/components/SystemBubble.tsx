import React from 'react';

interface SystemBubbleProps {
  message: string;
}

export function SystemBubble({ message }: SystemBubbleProps) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] bg-white border border-gray-200 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm">
        <p className="text-sm text-gray-800 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
