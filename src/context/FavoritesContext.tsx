import React, { useEffect, useMemo, useState } from 'react';
import type { Movie } from '../types';

type FavoritesContextValue = {
  favorites: Movie[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
};

export const FavoritesContext = React.createContext<FavoritesContextValue>({
  favorites: [],
  isFavorite: () => false,
  toggleFavorite: () => {},
  removeFavorite: () => {},
});

const STORAGE_KEY = 'favorites';

export function FavoritesProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Movie[]) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites)); } catch {}
  }, [favorites]);

  const isFavorite = (id: number) => favorites.some((m) => m.id === id);

  const toggleFavorite = (movie: Movie) => {
    setFavorites((prev) => (prev.some((m) => m.id === movie.id)
      ? prev.filter((m) => m.id !== movie.id)
      : [{ id: movie.id, title: movie.title, poster_path: movie.poster_path, release_date: movie.release_date }, ...prev]));
  };

  const removeFavorite = (id: number) => setFavorites((prev) => prev.filter((m) => m.id !== id));

  const value = useMemo(() => ({ favorites, isFavorite, toggleFavorite, removeFavorite }), [favorites]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}


