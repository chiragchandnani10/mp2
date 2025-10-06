import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';
import { FavoritesProvider } from './context/FavoritesContext';

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter basename="/mp2">
        <ThemeBoot>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </ThemeBoot>
      </BrowserRouter>
    </React.StrictMode>
  );
}

function ThemeBoot({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [theme, setTheme] = useState<string>(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch (_) {
      return 'light';
    }
  });

  useEffect(() => {
    const cls = 'theme-dark';
    if (theme === 'dark') {
      document.documentElement.classList.add(cls);
    } else {
      document.documentElement.classList.remove(cls);
    }
    try { localStorage.setItem('theme', theme); } catch (_) {}
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const ThemeContext = React.createContext<{ theme: string; setTheme: (t: string) => void }>({ theme: 'light', setTheme: () => {} });
