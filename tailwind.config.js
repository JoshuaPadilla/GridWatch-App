/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#359EFF",
        danger: "#EA2831",
        safe: "#39E079",
        warning: "#FCC61D",
        background: "#0d203b",
        card_bg: "#1f293790",
      },
    },
  },
  plugins: [],
};
