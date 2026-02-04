import React from 'react';
import { User, Settings, HelpCircle, Info, LogIn, Cloud } from 'lucide-react';
import { BottomNav } from './BottomNav';
import { useAuth } from '../context/AuthContext';
import { useGoogleDrive } from '../context/GoogleDriveContext';

interface MyPageProps {
  onNavigate: (page: 'main' | 'search' | 'favorites' | 'mypage' | 'google-drive') => void;
}

export function MyPage({ onNavigate }: MyPageProps) {
  const { user, signOut } = useAuth();
  const { isAuthenticated, images } = useGoogleDrive();

  const handleLogout = async () => { await signOut(); };

  return (
    <div className="flex flex-col h-[100dvh]">
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-xl font-bold text-gray-900">마이페이지</h1>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {user ? (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center overflow-hidden">
                {user.user_metadata.avatar_url ? (
                  <img src={user.user_metadata.avatar_url} alt="Profile" className="w-16 h-16 object-cover" />
                ) : ( <User className="w-8 h-8 text-purple-600" /> )}
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{user.user_metadata.name || '사용자'}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <button onClick={handleLogout} className="w-full py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors mb-6">로그아웃</button>
          </>
        ) : (
          <>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center"><User className="w-8 h-8 text-purple-600" /></div>
              <div>
                <h2 className="font-semibold text-gray-900">게스트님</h2>
                <p className="text-sm text-gray-500">로그인하여 더 많은 기능을 이용하세요</p>
              </div>
            </div>
            <button onClick={() => onNavigate('login')} className="w-full py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 mb-6">
              <LogIn className="w-5 h-5" /> 로그인 / 회원가입
            </button>
          </>
        )}

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-3 px-1">내 저장소</h3>
          <button onClick={() => onNavigate('google-drive')} className="w-full flex items-center justify-between py-4 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><Cloud className="w-5 h-5 text-blue-600" /></div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">Google Drive</h4>
                <p className="text-xs text-gray-500">{isAuthenticated ? `${images.length}개의 이미지` : '이미지를 불러오세요'}</p>
              </div>
            </div>
            <div className="text-blue-600">→</div>
          </button>
        </div>

        <div className="space-y-1">
          {[
            { icon: Settings, label: '설정', badge: null },
            { icon: HelpCircle, label: '고객센터', badge: null },
            { icon: Info, label: '앱 정보', badge: 'v1.0.0' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center justify-between py-3 px-4 -mx-4 hover:bg-gray-50 cursor-pointer transition-colors rounded-lg">
                <div className="flex items-center gap-3"><Icon className="w-5 h-5 text-gray-600" /><span className="text-sm text-gray-900">{item.label}</span></div>
                {item.badge && <span className="text-xs text-gray-400">{item.badge}</span>}
              </div>
            );
          })}
        </div>
      </div>
      <BottomNav currentPage="mypage" onNavigate={onNavigate} />
    </div>
  );
}
