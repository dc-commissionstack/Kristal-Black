import { useState } from 'react';
import { mockAlbums } from '../data/mockData';
import { CartItem, Album, Track } from '../types';
import './MusicSection.css';

interface MusicSectionProps {
  onAddToCart: (item: CartItem) => void;
}

export default function MusicSection({ onAddToCart }: MusicSectionProps) {
  const [activeAlbum, setActiveAlbum] = useState<string>(mockAlbums[0]?.id || '');
  const [purchasing, setPurchasing] = useState<string | null>(null);

  const currentAlbum = mockAlbums.find((a) => a.id === activeAlbum);

  const handleBuyAlbum = (album: Album) => {
    setPurchasing(album.id);
    onAddToCart({
      id: album.id,
      type: 'album',
      name: `${album.title} (Album)`,
      price: album.price,
      quantity: 1,
      imageUrl: album.artworkUrl,
    });
    setTimeout(() => setPurchasing(null), 1200);
  };

  const handleBuyTrack = (track: Track, album: Album) => {
    setPurchasing(track.id);
    onAddToCart({
      id: track.id,
      type: 'track',
      name: `${track.title} — ${album.title}`,
      price: track.price,
      quantity: 1,
      imageUrl: album.artworkUrl,
    });
    setTimeout(() => setPurchasing(null), 1200);
  };

  return (
    <section className="music section" id="music">
      <div className="container">
        <h2 className="section-title">Music</h2>
        <p className="text-muted text-center" style={{ marginBottom: '2rem' }}>
          Buy tracks or full albums. Download instantly, DRM-free, in high-quality FLAC/MP3.
        </p>

        {/* Album selector */}
        <div className="music__albums">
          {mockAlbums.map((album) => (
            <button
              key={album.id}
              className={`music__album-card ${activeAlbum === album.id ? 'active' : ''}`}
              onClick={() => setActiveAlbum(album.id)}
            >
              <img src={album.artworkUrl} alt={album.title} className="music__album-art" />
              <div className="music__album-info">
                <h3 className="music__album-title">{album.title}</h3>
                <span className="music__album-year">{album.releaseYear}</span>
              </div>
              <span className="music__album-price">${(album.price / 100).toFixed(2)}</span>
            </button>
          ))}
        </div>

        {/* Track listing */}
        {currentAlbum && (
          <div className="music__tracklist">
            <div className="music__tracklist-header">
              <h3>{currentAlbum.title}</h3>
              <button
                className={`btn btn-primary ${purchasing === currentAlbum.id ? 'btn-success' : ''}`}
                onClick={() => handleBuyAlbum(currentAlbum)}
              >
                {purchasing === currentAlbum.id ? '✓ Added!' : `Buy Album — $${(currentAlbum.price / 100).toFixed(2)}`}
              </button>
            </div>

            <div className="music__tracks">
              {currentAlbum.tracks.map((track, idx) => (
                <div key={track.id} className="music__track">
                  <span className="music__track-num">{idx + 1}</span>
                  <div className="music__track-info">
                    <span className="music__track-title">{track.title}</span>
                  </div>
                  <span className="music__track-duration">{track.duration}</span>
                  <span className="music__track-price">${(track.price / 100).toFixed(2)}</span>
                  <button
                    className={`btn ${purchasing === track.id ? 'btn-success' : 'btn-secondary'}`}
                    onClick={() => handleBuyTrack(track, currentAlbum)}
                  >
                    {purchasing === track.id ? '✓ Added' : 'Buy'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}