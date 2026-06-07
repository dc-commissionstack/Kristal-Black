import { useState } from 'react';
import { SECTIONS } from './config';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import Hero from './components/Hero';
import MusicSection from './components/MusicSection';
import MerchSection from './components/MerchSection';
import BioSection from './components/BioSection';
import ContactSection from './components/ContactSection';
import Cart from './components/Cart';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const { items, addItem, removeItem, updateQuantity, clearCart, totalPrice, totalItems } = useCart();

  return (
    <>
      <Header
        cartCount={totalItems}
        onCartClick={() => setCartOpen(true)}
      />

      <main>
        {SECTIONS.showHero && <Hero />}
        {SECTIONS.showMusic && <MusicSection onAddToCart={addItem} />}
        {SECTIONS.showMerch && <MerchSection onAddToCart={addItem} />}
        {SECTIONS.showBio && <BioSection />}
        {SECTIONS.showContact && <ContactSection />}
      </main>

      <footer className="footer">
        <div className="container" style={{ textAlign: 'center', padding: '2rem 0', borderTop: '1px solid var(--color-border)' }}>
          <p className="text-muted" style={{ fontSize: '0.875rem' }}>
            Powered by <strong style={{ color: 'var(--color-text)' }}>Direct Stage</strong> — Direct-to-fan, no middleman.
          </p>
        </div>
      </footer>

      <Cart
        items={items}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={removeItem}
        onUpdateQuantity={updateQuantity}
        onClear={clearCart}
        totalPrice={totalPrice}
      />
    </>
  );
}