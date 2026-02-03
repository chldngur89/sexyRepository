import React from 'react';
import { ChatBubble } from './ChatBubble';
import { SystemBubble } from './SystemBubble';
import { RenderProgressBubble } from './RenderProgressBubble';
import { VideoResultBubble } from './VideoResultBubble';
import { ErrorStateBubble } from './ErrorStateBubble';

interface ChatContainerProps {
  currentState: 'rendering' | 'uploading' | 'success' | 'render-error' | 'upload-error';
}

export function ChatContainer({ currentState }: ChatContainerProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Previous chat messages (context) */}
        <ChatBubble 
          type="user" 
          message="Generate a 10s highlight reel from today's notes"
        />
        
        <SystemBubble 
          message="I'll create a highlight reel for you. This will take about 30-60 seconds."
        />

        {/* Dynamic state rendering */}
        {currentState === 'rendering' && (
          <RenderProgressBubble 
            stage="Encoding"
            progress={72}
          />
        )}

        {(currentState === 'uploading' || currentState === 'success') && (
          <VideoResultBubble 
            uploadState={currentState === 'uploading' ? 'uploading' : 'success'}
          />
        )}

        {currentState === 'render-error' && (
          <ErrorStateBubble 
            errorType="render"
            message="Video generation failed. The source content may be corrupted or unavailable."
          />
        )}

        {currentState === 'upload-error' && (
          <VideoResultBubble 
            uploadState="error"
          />
        )}

        {/* Context messages below */}
        <div className="opacity-40 space-y-4">
          <ChatBubble 
            type="user" 
            message="Show me last week's summary"
          />
          <SystemBubble 
            message="Here's your summary for the past 7 days..."
          />
        </div>
      </div>
    </div>
  );
}
