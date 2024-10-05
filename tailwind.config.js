/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orgGold: "#D1A054",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1d4ed8", // Royal Blue
          secondary: "#9333ea", // Purple Heart
          accent: "#14b8a6", // Light Sea Green
          neutral: "#3d4451", // Charcoal
          "base-100": "#ffffff", // white
        },
      },
    ],
  },
};

// ignore es-lint error :  /*eslint-disable react/prop-types */