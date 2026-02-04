import React from 'react';
import { LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LoginPageProps {
  onNavigate: (page: 'main' | 'search' | 'favorites' | 'mypage') => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">ArtFlow</h1>
          <p className="text-gray-500 mb-8">AI 아트 콘텐츠 플랫폼</p>
          <button onClick={() => signInWithGoogle?.()} className="w-full max-w-sm flex items-center justify-center gap-3 px-6 py-4 bg-white border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors shadow-sm">
            <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" className="w-5 h-5" />
            Google로 로그인
          </button>
        </div>
      </div>
      <div className="p-4">
        <button onClick={() => onNavigate('main')} className="w-full py-3 text-gray-500 hover:text-gray-700">
          게스트로 둘러보기
        </button>
      </div>
    </div>
  );
}
