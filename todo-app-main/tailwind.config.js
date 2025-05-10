/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.{html,js}"],
  safelist: ["text-blue-900"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "system-ui"],
    },
    extend: {
      backgroundImage: {
        "desktop-dark": "url('/images/bg-desktop-dark.jpg')",
        "desktop-light": "url('/images/bg-desktop-light.jpg')",
      },
    },
  },
  plugins: [],
};
