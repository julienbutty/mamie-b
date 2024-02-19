const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5rem" }],
        sm: ["0.875rem", { lineHeight: "1.5rem" }],
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        lead: ["Mona Sans", ...defaultTheme.fontFamily.sans],
        mono: ["SF Mono", ...defaultTheme.fontFamily.sans],
        display: [
          ["Mona Sans", ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
      colors: {
        "my-primary": "#722536",
        "my-secondary": "#EB6767",
        // "my-background": "#ffecce",
        // "my-background": "#FAEFE2",
        // "my-background": "#ececec",
        // "my-background": "#fffcf8",
        "my-background": "#fff8e8",
        // "my-background": "#0e1217",
        // "my-background": "#f9f3eb",
        // "my-background": "#f5f5f5",
        // "my-background": "#d0b5b4",
        // "my-background": "#0e1217",
        "grid-car": "#8E9477",
        "grid-grocery": "#E39999",
        "grid-children": "#BFA5A3",
        "grid-diy": "#6697AE",
        "grid-guard": "#566077",
        "grid-administrative": "#A86371",
        "grid-pet": "#8BC392",
        backgroundColor: "#566077",
        accent: colors.cyan,
      },
      opacity: {
        2.5: "0.025",
        15: "0.15",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },

      keyframes: {
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="${value}" fill="none"><path d="M64 0H0V64"/></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme("backgroundColor")),
          type: ["color"],
        },
      );

      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundSize: value,
          }),
        },
        {
          values: theme("spacing"),
          type: ["number", "length", "any"],
        },
      );
    }),
  ],
};
