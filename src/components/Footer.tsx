import React from 'react';
import './Navbar.css';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="nav" style={{ position: 'static', borderTop: '1px solid #e5e7eb', borderBottom: 'none' }}>
      <div className="nav-inner" style={{ gridTemplateColumns: '1fr' }}>
        <div className="brand" style={{ fontWeight: 600 }}>
          © {new Date().getFullYear()} CineScope • Powered by TMDB
        </div>
      </div>
    </footer>
  );
}


