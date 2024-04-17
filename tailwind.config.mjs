/** @type {import('tailwindcss').Config} */

const fonts = {
  nationalNarrowMedium: "var(--font-national-narrow-medium)",
  nationalCompressedExtrabold: "var(--font-national-compressed-extrabold)",
  nationalCompressedRegular: "var(--font-national-compressed-regular)",
  ppeditorialnew: "var(--font-pp-editorial-new)",
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: fonts,
    fontSize: {
      "mobile-bu": [
        ".75rem",
        { lineHeight: ".9344rem", letterSpacing: "0.02em" },
      ],
      "mobile-sub-bold": ["1.875rem", { lineHeight: "2rem" }],
      "mobile-sub-light": ["1.5625rem", { lineHeight: 1 }],
      "mobile-copy": ["1.25rem", { lineHeight: "1.625rem" }],
      "mobile-head": ["2.5rem", { lineHeight: "2.625rem" }],
      copy: ["3.125rem", { lineHeight: "3.875rem" }],
      bu: ["1.25rem", { lineHeight: "1.5625rem", letterSpacing: "0.02em" }],
      head: ["10.625rem", { lineHeight: "8.4375rem" }],
    },
    colors: {
      "grey-caption": "#D9D9D980",
    },
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
