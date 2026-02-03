import React from 'react';
import { Upload, CheckCircle, AlertCircle, ExternalLink, RotateCw } from 'lucide-react';

interface UploadStatusRowProps {
  state: 'uploading' | 'success' | 'error';
}

export function UploadStatusRow({ state }: UploadStatusRowProps) {
  if (state === 'uploading') {
    return (
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <Upload className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="text-xs text-gray-600">Uploading to Google Drive…</span>
        </div>
      </div>
    );
  }

  if (state === 'success') {
    return (
      <div className="px-4 py-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-xs text-gray-600">Uploaded to Google Drive ✅</span>
          </div>
          <button className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
            Open in Drive
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // error state
  return (
    <div className="px-4 py-3 border-t border-gray-100 bg-red-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600" />
          <span className="text-xs text-red-900">Upload failed</span>
        </div>
        <button className="flex items-center gap-1.5 text-xs font-medium text-red-700 hover:text-red-800 transition-colors">
          <RotateCw className="w-3.5 h-3.5" />
          Retry
        </button>
      </div>
    </div>
  );
}
