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
      },
    },
  },
  plugins: [],
};
