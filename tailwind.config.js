/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#0d0f13",
          "200": "#0c0c0c",
          "300": "#050921",
          "400": "rgba(0, 0, 0, 0.47)",
        },
        white: "#fff",
        cadetblue: "#3d9bb7",
        "gray-4": "#bdbdbd",
        palevioletred: "#bd396f",
      },
      spacing: {},
      fontFamily: {
        "clash-display-variable": "'Clash Display Variable'",
        poppins: "Poppins",
        "clash-display": "'Clash Display'",
        mareka: "MAREKA",
      },
      borderRadius: {
        xl: "20px",
        "2xl": "21px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      sm: "14px",
      "36xl": "55px",
      xl: "20px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
