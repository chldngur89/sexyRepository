import React from 'react';

interface ChatBubbleProps {
  type: 'user' | 'system';
  message: string;
}

export function ChatBubble({ type, message }: ChatBubbleProps) {
  if (type === 'user') {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-blue-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm">
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="max-w-[80%] bg-white border border-gray-200 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm">
        <p className="text-sm text-gray-800 leading-relaxed">{message}</p>
      </div>
    </div>
  );
}
