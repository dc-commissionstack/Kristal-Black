import { mockArtist } from '../data/mockData';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <div className="hero__bg-overlay" />
        <img
          src={mockArtist.imageUrl}
          alt={`${mockArtist.name} — artist photo`}
          className="hero__bg-image"
        />
      </div>
      <div className="hero__content container">
        <div className="hero__tags">
          <span className="hero__tag">{mockArtist.genre}</span>
          <span className="hero__tag">{mockArtist.location}</span>
        </div>
        <h1 className="hero__title">{mockArtist.name}</h1>
        <p className="hero__subtitle">
          Independent music, direct from the artist. No label. No middleman.
          Just the music, exactly as it was meant to be heard.
        </p>
        <div className="hero__actions">
          <a href="#music" className="btn btn-primary btn-large">Listen & Buy</a>
          <a href="#merch" className="btn btn-secondary btn-large">Shop Merch</a>
        </div>
        <div className="hero__social">
          {mockArtist.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="hero__social-link"
              target="_blank"
              rel="noopener noreferrer"
              title={link.platform}
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}