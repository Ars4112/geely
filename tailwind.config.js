import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/layouts/**/*.html",
    "./src/pages/**/*.html",
    "./src/components/**/*.html",
    "./src/scripts/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Gilroy", ...defaultTheme.fontFamily.sans],
    },

    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },

    fluid: {
      min: "400px",
      max: "1440px",
      convertUnit: true,
      rootFontSize: "16px",
    },

    extend: {},
  },
  plugins: [
    require("tailwind-smart-fluid"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),

    iconsPlugin({
      collections: getIconCollections(["heroicons"]),
    }),
  ],
};
