export interface Track {
  id: string;
  title: string;
  duration: string;
  price: number; // in cents (e.g., 99 = $0.99)
  trackUrl: string;
  artworkUrl: string;
  genre?: string;
}

export interface Album {
  id: string;
  title: string;
  releaseYear: number;
  artworkUrl: string;
  price: number;
  tracks: Track[];
}

export interface MerchItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  sizes?: string[];
  category: 'clothing' | 'accessory' | 'vinyl' | 'other';
}

export interface ArtistInfo {
  name: string;
  bio: string[];
  imageUrl: string;
  genre: string;
  location: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: string;
  }[];
}

export interface CartItem {
  id: string;
  type: 'track' | 'album' | 'merch';
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description?: string;
}

export type PageSection = 'hero' | 'music' | 'merch' | 'bio' | 'contact';