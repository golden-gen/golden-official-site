/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3498DB",
        dark: "#333333",
        grayish: "#888",
        secondary: "#ECFAFF",
        "dark-primary": "#2179B5",
        blackish: "4F4E4E",
        grey: "#AFAFAF",
        gray: "#555555",
        ccc: "#CCCCCC",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero3: "url('/images/hero-register.webp')",
        hero: "url('/images/hero.webp')",
        hero2: "url('/images/hero-donate.webp')",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
        SpaceGro: ["Space Grotesk", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Poppins: ["Poppins", "sans - serif"],
        Nunito: ["Nunito", "sans - serif"],
      },
      lineClamp: {
        8: "8",
        10: "10",
        12: "12",
      },
    },
  },
  plugins: [],
};
