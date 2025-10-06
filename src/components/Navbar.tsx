import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../index';

export default function Navbar(): React.JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">CineScope</div>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>Home</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')}>Gallery</NavLink>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? 'active' : '')}>Favorites</NavLink>
        </nav>
        <button aria-label="Toggle theme" className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
