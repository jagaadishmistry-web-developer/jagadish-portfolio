/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secendry: "#1B5BDC",
        sTwo: "#eb4d21f8",
        hiLight: "#878787",
        bl: "#070707",
        wh: "#ffff",
        darkSec:"130B09"
      },
    },
  },
  plugins: [],
};
