import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {
  getAuthUrl, setAccessToken, clearAccessToken, isAuthenticated,
  listFolders, listImagesInFolder, getUserInfo,
  GDriveFolder, GDriveFile,
} from '../lib/googleDrive';

interface GoogleDriveState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: { name?: string; email?: string; picture?: string } | null;
  folders: GDriveFolder[];
  images: GDriveFile[];
  error: string | null;
}

interface GoogleDriveContextType extends GoogleDriveState {
  login: () => void;
  logout: () => void;
  handleCallback: (credentials: { access_token: string }) => void;
  loadFolders: () => Promise<void>;
  loadImages: (folderId: string) => Promise<void>;
  clearImages: () => void;
}

const GoogleDriveContext = createContext<GoogleDriveContextType | null>(null);

export const useGoogleDrive = () => {
  const context = useContext(GoogleDriveContext);
  if (!context) throw new Error('useGoogleDrive must be used within GoogleDriveProvider');
  return context;
};

const GoogleDriveProviderContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GoogleDriveState>({
    isAuthenticated: false, isLoading: false, user: null, folders: [], images: [], error: null,
  });

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('gdrive_access_token');
      if (token) {
        setAccessToken(token);
        try {
          const userInfo = await getUserInfo();
          setState(prev => ({ ...prev, isAuthenticated: true, user: { name: userInfo.name, email: userInfo.email, picture: userInfo.picture } }));
        } catch { clearAccessToken(); }
      }
    };
    checkAuth();
  }, []);

  const login = useCallback(() => { window.location.href = getAuthUrl(); }, []);

  const handleCallback = useCallback((credentials: { access_token: string }) => {
    setAccessToken(credentials.access_token);
    const fetchUserInfo = async () => {
      try {
        const userInfo = await getUserInfo();
        setState(prev => ({ ...prev, isAuthenticated: true, user: { name: userInfo.name, email: userInfo.email, picture: userInfo.picture }, isLoading: false }));
      } catch {
        setState(prev => ({ ...prev, isLoading: false, error: '사용자 정보를 가져오지 못했습니다.' }));
      }
    };
    fetchUserInfo();
  }, []);

  const logout = useCallback(() => {
    clearAccessToken();
    setState({ isAuthenticated: false, isLoading: false, user: null, folders: [], images: [], error: null });
  }, []);

  const loadFolders = useCallback(async () => {
    if (!isAuthenticated()) { setState(prev => ({ ...prev, error: '먼저 Google Drive에 연결해주세요.' })); return; }
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const folders = await listFolders();
      setState(prev => ({ ...prev, folders, isLoading: false }));
    } catch { setState(prev => ({ ...prev, isLoading: false, error: '폴더 목록을 불러오지 못했습니다.' })); }
  }, []);

  const loadImages = useCallback(async (folderId: string) => {
    if (!isAuthenticated()) { setState(prev => ({ ...prev, error: '먼저 Google Drive에 연결해주세요.' })); return; }
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      const images = await listImagesInFolder(folderId);
      setState(prev => ({ ...prev, images, isLoading: false }));
    } catch { setState(prev => ({ ...prev, isLoading: false, error: '이미지를 불러오지 못했습니다.' })); }
  }, []);

  const clearImages = useCallback(() => { setState(prev => ({ ...prev, images: [] })); }, []);

  return (
    <GoogleDriveContext.Provider value={{ ...state, login, logout, handleCallback, loadFolders, loadImages, clearImages }}>
      {children}
    </GoogleDriveContext.Provider>
  );
};

export const GoogleDriveProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';
  if (!clientId) {
    return (
      <GoogleDriveContext.Provider value={{ isAuthenticated: false, isLoading: false, user: null, folders: [], images: [], error: 'Client ID가 설정되지 않았습니다.', login: () => {}, logout: () => {}, handleCallback: () => {}, loadFolders: async () => {}, loadImages: async () => {}, clearImages: () => {} }}>
        {children}
      </GoogleDriveContext.Provider>
    );
  }
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleDriveProviderContent>{children}</GoogleDriveProviderContent>
    </GoogleOAuthProvider>
  );
};

export default GoogleDriveContext;
