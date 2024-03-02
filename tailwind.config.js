/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498DB',
        dark: '#333333',
        grayish: '#888',
        secondary: '#ECFAFF',
        'dark-primary': '#2179B5'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero': "url('/images/hero.jpg')"
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Manrope: ['Manrope', 'sans-serif'],
        SpaceGro: ['Space Grotesk', 'sans-serif'],
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      lineClamp: {
        10: '10',
        12: '12'
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
