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
  genre: "Rap / Hip-Hop",
  location: "Los Angeles, CA",
  socialLinks: [
    { platform: "Instagram", url: "#", icon: "instagram" },
    { platform: "YouTube", url: "#", icon: "youtube" },
    { platform: "Spotify", url: "#", icon: "spotify" },
  ],
};

/**
 * Kristal Black's real recordings. Titles come from the master file names.
 * trackUrl stays empty until the MP3 is in public/music/<id>.mp3;
 * then set trackUrl to "/music/<id>.mp3" and fill in duration.
 */
export const mockAlbums: Album[] = [
  {
    id: "kristal-black-singles",
    title: "Kristal Black: Singles",
    artworkUrl: "/kristal-black-logo.png",
    price: 799, // placeholder price, set by the artist
    tracks: [
      { id: "when-u-see-me", title: "When U See Me", duration: "", price: 99, trackUrl: "", artworkUrl: "" },
      { id: "dont-violate", title: "Don't Violate", duration: "", price: 99, trackUrl: "", artworkUrl: "" },
      { id: "jook-with-flexion", title: "Jook With Flexion", duration: "", price: 99, trackUrl: "", artworkUrl: "" },
      { id: "outside", title: "Outside", duration: "", price: 99, trackUrl: "", artworkUrl: "" },
      { id: "feeling-you", title: "Feeling You", duration: "", price: 99, trackUrl: "", artworkUrl: "" },
      { id: "spend-some-time", title: "Spend Some Time", duration: "", price: 99, trackUrl: "", artworkUrl: "" },
      { id: "on-tha-dead-homies", title: "On Tha Dead Homies", duration: "", price: 99, trackUrl: "", artworkUrl: "" },
      { id: "whip-it", title: "Whip It", duration: "", price: 99, trackUrl: "", artworkUrl: "" },
      { id: "az-new-session-1", title: "AZ New Session 1 (Rough)", duration: "", price: 99, trackUrl: "", artworkUrl: "" },
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