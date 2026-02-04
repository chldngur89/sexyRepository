import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import type { ContentItem } from '../App';

interface FavoritesContextType {
  favorites: ContentItem[];
  addFavorite: (content: ContentItem) => void;
  removeFavorite: (contentId: number) => void;
  isFavorite: (contentId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider');
  return context;
};

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<ContentItem[]>([]);

  const addFavorite = useCallback((content: ContentItem) => {
    setFavorites(prev => {
      if (prev.some(f => f.id === content.id)) return prev;
      return [...prev, content];
    });
  }, []);

  const removeFavorite = useCallback((contentId: number) => {
    setFavorites(prev => prev.filter(f => f.id !== contentId));
  }, []);

  const isFavorite = useCallback((contentId: number) => {
    return favorites.some(f => f.id === contentId);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
