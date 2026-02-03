import React from 'react';

interface StateSelectorProps {
  currentState: 'rendering' | 'uploading' | 'success' | 'render-error' | 'upload-error';
  onStateChange: (state: 'rendering' | 'uploading' | 'success' | 'render-error' | 'upload-error') => void;
}

export function StateSelector({ currentState, onStateChange }: StateSelectorProps) {
  const states = [
    { id: 'rendering' as const, label: 'Rendering Progress' },
    { id: 'uploading' as const, label: 'Video Complete + Uploading' },
    { id: 'success' as const, label: 'Upload Success' },
    { id: 'render-error' as const, label: 'Render Error' },
    { id: 'upload-error' as const, label: 'Upload Error' },
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-gray-700 mr-2">Demo State:</span>
          {states.map((state) => (
            <button
              key={state.id}
              onClick={() => onStateChange(state.id)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                currentState === state.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {state.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Click buttons above to see different chat bubble states
        </p>
      </div>
    </div>
  );
}
