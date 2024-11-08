/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],

  theme: {
    container:{
      center: true,
      padding: "2erm",
    },
    extend: {
      colors: {
        primary: "#243642",
        light: "#E2F1E7",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#243642",
          "secondary": "#629584",
          "accent": "#629584",
          "neutral": "#E2F1E7",
          "base-100": "#E2F1E7",
          "info": "#629584",
          "success": "#00aa4e",
          "warning": "#ff9100",
          "error": "#ff4869",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
