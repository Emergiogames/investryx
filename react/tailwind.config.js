/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "react-image-crop/dist/ReactCrop.css",
  ],
  theme: {
    extend: {
      borderRadius: {
        "5xl": "6rem", // Change this value to your desired size
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        blink: "blink 1.5s ease-in-out forwards", // Custom blink animation
      },
      fontFamily: {
        audiowide: ['Audiowide', 'cursive'],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
