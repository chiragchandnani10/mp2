import React, { useContext } from 'react';
import './Favorites.css';
import { FavoritesContext } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';

export default function Favorites(): React.JSX.Element {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  return (
    <div className="page-wrap">
      <h2 className="page-title">Your Favorites</h2>
      {!favorites.length && <div className="center-message">No favorites yet. Add some from Home or Gallery.</div>}
      <ul className="result-grid">
        {favorites.map((m) => (
          <li key={m.id} className="card">
            <Link to={`/detail/${m.id}`} className="card-link">
              {m.poster_path ? (
                <img className="poster" src={`https://image.tmdb.org/t/p/w300${m.poster_path}`} alt={m.title} />
              ) : (
                <div className="poster placeholder">No Image</div>
              )}
              <div className="card-body">
                <div className="card-title">{m.title}</div>
                <div className="card-sub">{m.release_date ?? '—'}</div>
              </div>
            </Link>
            <div className="card-actions">
              <button className="fav-btn active" onClick={() => removeFavorite(m.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
