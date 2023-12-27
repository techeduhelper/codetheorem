/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "766px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      boxShadow: {
        sidebar_shadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
        card_shadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        project_shadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },

      colors: {
        hover_color: "rgba(28, 210, 173, 0.1)",
        border_color: "rgb(228, 224, 224)",
      },

      fontFamily: {
        Gilroy_black: ["Gilroy-black"],
        Gilroy_bold: ["Gilroy-bold"],
        Gilroy_Extrabold: ["Gilroy-ExtraBold"],
        Gilroy_Heavy: ["Gilroy-Heavy"],
        Gilroy_Light: ["Gilroy-Light"],
        Gilroy_Medium: ["Gilroy-Medium"],
        Gilroy_Semibold: ["Gilroy-SemiBold"],
        Gilroy_Thin: ["Gilroy-Thin"],
        Gilroy_Ultralight: ["Gilroy-UltraLight"],
      },
    },
  },
  plugins: [],
};
