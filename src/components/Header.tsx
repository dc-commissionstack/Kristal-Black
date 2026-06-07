import React from 'react';
import { SITE_CONFIG } from '../config';
import './Header.css';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'Music', href: '#music' },
    { label: 'Merch', href: '#merch' },
    { label: 'Bio', href: '#bio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#" className="header__logo">
          <img src="/kristal-black-logo.png" alt={SITE_CONFIG.artistName} className="header__logo-img" />
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="header__nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <button className="header__cart-btn" onClick={onCartClick} aria-label="Open cart">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && <span className="header__cart-badge">{cartCount}</span>}
          </button>

          <button
            className="header__menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`header__menu-bar ${menuOpen ? 'open' : ''}`} />
            <span className={`header__menu-bar ${menuOpen ? 'open' : ''}`} />
            <span className={`header__menu-bar ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  );
}