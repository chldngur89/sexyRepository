import React from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

export function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className="flex items-center justify-between px-6 py-2 bg-white">
      <span className="text-sm font-semibold text-gray-900">{time}</span>
      <div className="flex items-center gap-1">
        <Signal className="w-4 h-4 text-gray-900" />
        <Wifi className="w-4 h-4 text-gray-900" />
        <Battery className="w-5 h-5 text-gray-900" />
      </div>
    </div>
  );
}
