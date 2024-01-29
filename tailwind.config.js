/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0095f6',
        facebook: '#385185',
        link : '#00376b'
      },
      backgroundImage: {
        'logo-pattern': 'url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk)'
      }
    },
  },
  plugins: [],
}

