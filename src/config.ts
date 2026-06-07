/**
 * Direct Stage Configuration
 *
 * Update these values for each artist build.
 */

export const SITE_CONFIG = {
  artistName: "Kristal Black",
  siteTitle: "Kristal Black — Official Store",
  siteDescription: "Buy music and merchandise directly from Kristal Black.",
  primaryColor: "#0A0A0A",
  domain: "kristalblack.com",
};

/**
 * Stripe Configuration
 *
 * To enable payments:
 * 1. Create a Stripe account at https://stripe.com
 * 2. Get your publishable key from the Stripe Dashboard
 * 3. Set up a Stripe Checkout session endpoint on your backend
 */
export const STRIPE_CONFIG = {
  // Replace with your actual Stripe publishable key
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "",

  // The API endpoint to create a checkout session
  // This should be your own backend endpoint that creates a Stripe Checkout Session
  checkoutEndpoint: import.meta.env.VITE_CHECKOUT_ENDPOINT || "/api/create-checkout-session",
};

export const SECTIONS = {
  showHero: true,
  showMusic: true,
  showMerch: true,
  showBio: true,
  showContact: true,
} as const;