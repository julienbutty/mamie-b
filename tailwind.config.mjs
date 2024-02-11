/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "my-primary": "#722536",
        "my-secondary": "#EB6767",
        // "my-background": "#ffecce",
        // "my-background": "#ececec",
        // "my-background": "#fffcf8",
        // "my-background": "#fff8e8",
        "my-background": "#f9f3eb",
        "grid-car": "#8E9477",
        "grid-grocery": "#E39999",
        "grid-children": "#BFA5A3",
        "grid-diy": "#6697AE",
        "grid-guard": "#566077",
        "grid-administrative": "#A86371",
        "grid-pet": "#8BC392",
      },
    },
  },
  plugins: [],
};
