/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      background: {
        primary: "#FAFAFB",
        dark: "#202020",
      },
      text: {
        primary: "#212121",
        dark: "#F8F8F8",
      },
    },
  },
  plugins: [],
};
