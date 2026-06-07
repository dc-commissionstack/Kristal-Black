import { mockArtist } from '../data/mockData';
import './BioSection.css';

export default function BioSection() {
  return (
    <section className="bio section" id="bio">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="bio__content">
          <div className="bio__image-wrap">
            <img src={mockArtist.imageUrl} alt={mockArtist.name} className="bio__image" />
          </div>
          <div className="bio__text">
            {mockArtist.bio.map((paragraph, i) => (
              <p key={i} className="bio__paragraph">{paragraph}</p>
            ))}
            <div className="bio__details">
              <span><strong>Genre:</strong> {mockArtist.genre}</span>
              <span><strong>Location:</strong> {mockArtist.location}</span>
            </div>
            <div className="bio__social">
              {mockArtist.socialLinks.map((link) => (
                <a key={link.platform} href={link.url} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}