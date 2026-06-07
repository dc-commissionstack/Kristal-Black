import { useState } from 'react';
import { CartItem } from '../types';
import { STRIPE_CONFIG } from '../config';
import './Cart.css';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onRemove: (id: string, type: CartItem['type']) => void;
  onUpdateQuantity: (id: string, type: CartItem['type'], qty: number) => void;
  onClear: () => void;
  totalPrice: number;
}

export default function Cart({
  items,
  isOpen,
  onClose,
  onRemove,
  onUpdateQuantity,
  onClear,
  totalPrice,
}: CartProps) {
  const [checkingOut, setCheckingOut] = useState(false);
  const [checkoutStatus, setCheckoutStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const handleCheckout = async () => {
    setCheckoutStatus('loading');
    setCheckingOut(true);

    // Check if Stripe is configured
    if (!STRIPE_CONFIG.publishableKey) {
      setCheckoutStatus('error');
      setCheckingOut(false);
      alert(
        'Stripe is not configured yet. To enable payments:\n\n' +
        '1. Create a Stripe account\n' +
        '2. Set VITE_STRIPE_PUBLISHABLE_KEY in your .env file\n' +
        '3. Create a checkout session endpoint\n\n' +
        'For now, this is a preview of the cart flow.'
      );
      return;
    }

    try {
      const response = await fetch(STRIPE_CONFIG.checkoutEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((item) => ({
            id: item.id,
            type: item.type,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        }),
      });

      if (!response.ok) throw new Error('Checkout failed');

      const session = await response.json();
      // Redirect to Stripe Checkout
      if (session.url) {
        window.location.href = session.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setCheckoutStatus('error');
      setCheckingOut(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart" onClick={(e) => e.stopPropagation()}>
        <div className="cart__header">
          <h2 className="cart__title">Cart ({items.length})</h2>
          <button className="cart__close" onClick={onClose} aria-label="Close cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart__empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <p>Your cart is empty</p>
            <p className="text-muted">Browse music and merch to add items.</p>
          </div>
        ) : (
          <>
            <div className="cart__items">
              {items.map((item) => (
                <div key={`${item.type}-${item.id}`} className="cart__item">
                  <img src={item.imageUrl} alt={item.name} className="cart__item-image" />
                  <div className="cart__item-info">
                    <h4 className="cart__item-name">{item.name}</h4>
                    <span className="cart__item-type">{item.type}</span>
                    <span className="cart__item-price">${(item.price / 100).toFixed(2)}</span>
                  </div>
                  <div className="cart__item-actions">
                    <div className="cart__qty">
                      <button
                        className="cart__qty-btn"
                        onClick={() => onUpdateQuantity(item.id, item.type, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="cart__qty-value">{item.quantity}</span>
                      <button
                        className="cart__qty-btn"
                        onClick={() => onUpdateQuantity(item.id, item.type, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart__remove"
                      onClick={() => onRemove(item.id, item.type)}
                      aria-label="Remove item"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart__footer">
              <div className="cart__total">
                <span>Total</span>
                <span className="cart__total-price">${(totalPrice / 100).toFixed(2)}</span>
              </div>
              <button
                className="btn btn-primary btn-large"
                onClick={handleCheckout}
                disabled={checkingOut}
                style={{ width: '100%' }}
              >
                {checkoutStatus === 'loading' ? 'Processing...' : 'Checkout'}
              </button>
              {checkoutStatus === 'error' && (
                <p className="cart__error">Checkout failed. Please try again.</p>
              )}
              <button className="cart__clear" onClick={onClear}>
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}