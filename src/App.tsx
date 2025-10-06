import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchList from './components/SearchList';
import GalleryView from './components/GalleryView';
import DetailView from './components/DetailView';
import ErrorBoundary from './components/ErrorBoundary';

export default function App(): React.JSX.Element {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<SearchList />} />
            <Route path="/gallery" element={<GalleryView />} />
            <Route path="/detail/:id" element={<DetailView />} />
            <Route path="*" element={<div className="center-message">Page not found</div>} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
