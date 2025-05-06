/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  safelist: ["blur", "overflow-hidden", "hidden", "delete-btn"],

  theme: {
    fontFamily: {
      redhat: ["Red Hat Text", "ui-monospace"],
    },
    extend: {},
  },
  plugins: [],
};
