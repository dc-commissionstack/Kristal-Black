import { ArtistInfo, Album, MerchItem } from '../types';

/**
 * Mock data for the starter template.
 * Replace with real artist data when building a specific artist site.
 */

export const mockArtist: ArtistInfo = {
  name: "Kristal Black",
  bio: [
    "Independent artist crafting genre-blending sounds. Every track is a journey into texture and emotion.",
    "Direct Stage gives fans a direct line to the music. No algorithms. No gatekeepers. Just the art, exactly as it was meant to be heard.",
  ],
  imageUrl: "",
  genre: "Electronic / R&B",
  location: "Los Angeles, CA",
  socialLinks: [
    { platform: "Instagram", url: "#", icon: "instagram" },
    { platform: "YouTube", url: "#", icon: "youtube" },
    { platform: "Spotify", url: "#", icon: "spotify" },
  ],
};

export const mockAlbums: Album[] = [
  {
    id: "album-1",
    title: "Midnight Signals",
    releaseYear: 2024,
    artworkUrl: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&q=80",
    price: 999, // $9.99
    tracks: [
      { id: "track-1", title: "Neon Drift", duration: "4:12", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-2", title: "Pulse Wave", duration: "3:48", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-3", title: "Signal Lost", duration: "5:02", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-4", title: "Analog Dreams", duration: "4:30", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-5", title: "Transmission", duration: "6:15", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-6", title: "Static Bloom", duration: "3:55", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-7", title: "Resonance", duration: "4:44", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-8", title: "Afterglow", duration: "5:20", price: 99, trackUrl: "#", artworkUrl: "" },
    ],
  },
  {
    id: "album-2",
    title: "Static Bloom",
    releaseYear: 2023,
    artworkUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80",
    price: 799,
    tracks: [
      { id: "track-9", title: "Dawn Chorus", duration: "4:02", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-10", title: "Phase Shift", duration: "3:32", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-11", title: "Echoes", duration: "5:45", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-12", title: "Glow", duration: "4:18", price: 99, trackUrl: "#", artworkUrl: "" },
      { id: "track-13", title: "Horizon Line", duration: "6:00", price: 99, trackUrl: "#", artworkUrl: "" },
    ],
  },
];

export const mockMerch: MerchItem[] = [
  {
    id: "merch-1",
    name: "Midnight Signals T-Shirt",
    description: "Black heavyweight cotton tee with screen-printed album art. Relaxed fit.",
    price: 3000,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "clothing",
  },
  {
    id: "merch-2",
    name: "Static Bloom Vinyl",
    description: "Limited edition 12\" vinyl on translucent blue wax. Includes digital download.",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1581305122145-19e549ad4e8b?w=400&q=80",
    category: "vinyl",
  },
  {
    id: "merch-3",
    name: "Artist Logo Hoodie",
    description: "Premium pullover hoodie with embroidered logo. Oversized fit.",
    price: 5500,
    imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80",
    sizes: ["S", "M", "L", "XL"],
    category: "clothing",
  },
  {
    id: "merch-4",
    name: "Enamel Pin Set",
    description: "Set of 4 hard enamel pins featuring album artwork motifs.",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1593164842264-8543728c3ee4?w=400&q=80",
    category: "accessory",
  },
  {
    id: "merch-5",
    name: "Midnight Signals CD",
    description: "Digipak CD with full album artwork and lyric booklet.",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1593697972670-7e530a465b8e?w=400&q=80",
    category: "other",
  },
];