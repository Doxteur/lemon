/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        'main-dark': "#1b1c24",
        'main-purple': "#7e5bef",
        'main-light-dark': "#273444",
      },
    },
  },
};
