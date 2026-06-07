import { useState, FormEvent } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In production, send to your email list service (Mailchimp, ConvertKit, etc.)
    console.log('Email captured:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__card">
          <h2 className="section-title">Stay Connected</h2>
          <p className="text-muted text-center" style={{ marginBottom: '1.5rem' }}>
            Join the mailing list for exclusive releases, tour dates, and merch drops.
            No spam. Unsubscribe anytime.
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="contact__input"
              required
              aria-label="Email address"
            />
            <button type="submit" className={`btn ${submitted ? 'btn-success' : 'btn-primary'} btn-large`}>
              {submitted ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </form>

          <p className="contact__note text-muted">
            By subscribing, you agree to receive emails from the artist. 
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}