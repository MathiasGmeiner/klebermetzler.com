/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      "mobile-bu": [
        ".75rem",
        { lineHeight: ".9344rem", letterSpacing: "0.02em" },
      ],
      "mobile-copy": ["1.25rem", { lineHeight: "1.625rem" }],
    },
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
