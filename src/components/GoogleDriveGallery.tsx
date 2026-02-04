import React, { useEffect, useState } from 'react';
import { Folder, Image, Loader2, AlertCircle, LogIn, LogOut } from 'lucide-react';
import { useGoogleDrive } from '../context/GoogleDriveContext';
import { GDriveFile } from '../lib/googleDrive';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GoogleDriveGalleryProps {
  onImagesLoaded?: (images: GDriveFile[]) => void;
  maxImages?: number;
}

export const GoogleDriveGallery: React.FC<GoogleDriveGalleryProps> = ({ onImagesLoaded, maxImages = 50 }) => {
  const { isAuthenticated, isLoading, user, folders, images, error, login, logout, loadFolders, loadImages, clearImages } = useGoogleDrive();
  const [selectedFolderId, setSelectedFolderId] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'gallery'>('gallery');

  useEffect(() => { if (isAuthenticated && folders.length === 0) loadFolders(); }, [isAuthenticated, folders.length, loadFolders]);
  useEffect(() => { if (selectedFolderId) loadImages(selectedFolderId); }, [selectedFolderId, loadImages]);
  useEffect(() => { if (images.length > 0 && onImagesLoaded) onImagesLoaded(images); }, [images, onImagesLoaded]);

  const handleFolderSelect = (folderId: string) => { setSelectedFolderId(folderId); };

  const getImageUrl = (file: GDriveFile): string => {
    if (file.thumbnailLink) return file.thumbnailLink;
    return `https://drive.google.com/thumbnail?id=${file.id}&sz=w800`;
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
        <LogIn className="w-12 h-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Google Drive 연결</h3>
        <p className="text-sm text-gray-500 mb-4 text-center">Google Drive의 이미지를 불러오려면 먼저 연결이 필요해요.</p>
        <button onClick={login} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          <img src="https://www.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" alt="Google Drive" className="w-5 h-5" />
          Google Drive로 로그인
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {user?.picture && <img src={user.picture} alt="Profile" className="w-8 h-8 rounded-full" />}
          <div>
            <p className="font-medium text-gray-800">{user?.name || '사용자'}</p>
            <button onClick={logout} className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
              <LogOut className="w-3 h-3" /> 로그아웃
            </button>
          </div>
        </div>
        {selectedFolderId && <button onClick={() => { setSelectedFolderId(''); clearImages(); }} className="text-sm text-gray-500 hover:text-gray-700">다른 폴더 선택</button>}
      </div>

      {error && <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg"><AlertCircle className="w-5 h-5 flex-shrink-0" /><p className="text-sm">{error}</p></div>}

      {!selectedFolderId && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-700">폴더 선택</h3>
            <button onClick={loadFolders} disabled={isLoading} className="text-sm text-blue-600 hover:text-blue-700 disabled:opacity-50">새로고침</button>
          </div>
          {isLoading && folders.length === 0 ? (
            <div className="flex items-center justify-center py-8"><Loader2 className="w-6 h-6 animate-spin text-blue-600" /></div>
          ) : folders.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {folders.map((folder) => (
                <button key={folder.id} onClick={() => handleFolderSelect(folder.id)} className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-left">
                  <Folder className="w-6 h-6 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700 truncate">{folder.name}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500"><Folder className="w-12 h-12 mx-auto mb-2 text-gray-300" /><p>폴더가 없어요</p></div>
          )}
        </div>
      )}

      {selectedFolderId && (
        <div className="space-y-4">
          {isLoading && <div className="flex items-center justify-center py-8"><Loader2 className="w-6 h-6 animate-spin text-blue-600" /><span className="ml-2 text-gray-600">이미지 로딩 중...</span></div>}
          {!isLoading && images.length > 0 && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-700">이미지 ({Math.min(images.length, maxImages)}/{images.length})</h3>
                <div className="flex gap-2">
                  <button onClick={() => setViewMode('gallery')} className={`p-2 rounded ${viewMode === 'gallery' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}><Image className="w-4 h-4" /></button>
                  <button onClick={() => setViewMode('grid')} className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}><div className="grid grid-cols-2 gap-0.5 w-4 h-4">{[1,2,3,4].map(i => <div key={i} className="bg-current" />)}</div></button>
                </div>
              </div>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {images.slice(0, maxImages).map((file) => (
                    <div key={file.id} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden group">
                      <ImageWithFallback src={getImageUrl(file)} alt={file.name} className="w-full h-full object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-xs text-white truncate">{file.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {images.slice(0, maxImages).map((file) => (
                    <div key={file.id} className="relative bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '75%' }}>
                      <ImageWithFallback src={getImageUrl(file)} alt={file.name} className="absolute top-0 left-0 w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
          {!isLoading && images.length === 0 && <div className="text-center py-8 text-gray-500"><Image className="w-12 h-12 mx-auto mb-2 text-gray-300" /><p>이 폴더에 이미지가 없어요</p></div>}
        </div>
      )}
    </div>
  );
};

export default GoogleDriveGallery;
