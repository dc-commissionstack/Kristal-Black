import { useState } from 'react';
import { mockMerch } from '../data/mockData';
import { CartItem, MerchItem } from '../types';
import './MerchSection.css';

interface MerchSectionProps {
  onAddToCart: (item: CartItem) => void;
}

export default function MerchSection({ onAddToCart }: MerchSectionProps) {
  const [added, setAdded] = useState<string | null>(null);

  const handleAdd = (item: MerchItem) => {
    setAdded(item.id);
    onAddToCart({
      id: item.id,
      type: 'merch',
      name: item.name,
      price: item.price,
      quantity: 1,
      imageUrl: item.imageUrl,
      description: item.description,
    });
    setTimeout(() => setAdded(null), 1200);
  };

  return (
    <section className="merch section" id="merch">
      <div className="container">
        <h2 className="section-title">Merchandise</h2>
        <p className="text-muted text-center" style={{ marginBottom: '2rem' }}>
          Limited edition gear. Each purchase directly supports the artist.
        </p>

        <div className="merch__grid">
          {mockMerch.map((item) => (
            <div key={item.id} className="merch__card">
              <div className="merch__image-wrap">
                <img src={item.imageUrl} alt={item.name} className="merch__image" />
                <span className="merch__category">{item.category}</span>
              </div>
              <div className="merch__info">
                <h3 className="merch__name">{item.name}</h3>
                <p className="merch__description">{item.description}</p>
                {item.sizes && (
                  <div className="merch__sizes">
                    {item.sizes.map((s) => (
                      <span key={s} className="merch__size">{s}</span>
                    ))}
                  </div>
                )}
                <div className="merch__bottom">
                  <span className="merch__price">${(item.price / 100).toFixed(2)}</span>
                  <button
                    className={`btn ${added === item.id ? 'btn-success' : 'btn-primary'}`}
                    onClick={() => handleAdd(item)}
                  >
                    {added === item.id ? '✓ Added!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}