/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const screens = {
  md: "600px",
  lg: "1500px",
  xl: "1920px",
};

const fonts = {
  nationalNarrowMedium: "var(--font-national-narrow-medium)",
  nationalCompressedExtrabold: "var(--font-national-compressed-extrabold)",
  nationalCompressedRegular: "var(--font-national-compressed-regular)",
  ppeditorialnew: "var(--font-pp-editorial-new)",
};

const fontSizes = {
  highlight: {
    sm: {
      fontSize: "2.5rem",
      lineHeight: "2.625rem",
    },
    md: {
      fontSize: "4.375rem",
      lineHeight: "5rem",
    },
    lg: {
      fontSize: "7.5rem",
      lineHeight: "8.4375rem",
    },
    xl: {
      fontSize: "10.625rem",
      lineHeight: "12.1875rem",
    },
  },
  head: {
    sm: {
      fontSize: "2.5rem",
      lineHeight: 0.9,
    },
    md: {
      fontSize: "clamp(3rem, 10vw, 9.6875rem)",
      lineHeight: 0.8,
    },
    lg: {
      fontSize: "clamp(10rem, 11vw, 13.75rem)",
      lineHeight: 0.8,
    },
    xl: {
      fontSize: "clamp(12rem, 10.5vw, 17.5rem)",
      lineHeight: 0.8,
    },
  },
  subtitle: {
    sm: {
      fontSize: ".75rem",
      lineHeight: ".9344rem",
      letterSpacing: "0.02em",
    },
    md: {
      fontSize: "1.25rem",
      lineHeight: "1.5625rem",
      letterSpacing: "0.02em",
    },
  },
  textHeadline: {
    sm: {
      fontSize: "1.875rem",
      lineHeight: "2rem",
    },
    md: {
      fontSize: "2.5rem",
      lineHeight: "2.875rem",
    },
    lg: {
      fontSize: "4.6875rem",
      lineHeight: "5.625rem",
    },
    xl: {
      fontSize: "6.25rem",
      lineHeight: "7.1875rem",
    },
  },
  copy: {
    sm: {
      fontSize: "1.25rem",
      lineHeight: "1.625rem",
    },
    md: {
      fontSize: "1.5rem",
      lineHeight: "1.875rem",
    },
    lg: {
      fontSize: "3.125rem",
      lineHeight: "3.875rem",
    },
    xl: {
      fontSize: "4.6875rem",
      lineHeight: "5.625rem",
    },
  },
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens,
    fontFamily: fonts,
    fontSize: {
      "mobile-bu": [
        fontSizes.subtitle.sm.fontSize,
        {
          lineHeight: fontSizes.subtitle.sm.lineHeight,
          letterSpacing: fontSizes.subtitle.sm.letterSpacing,
        },
      ],
      "mobile-sub-bold": [
        fontSizes.textHeadline.sm.fontSize,
        { lineHeight: fontSizes.textHeadline.sm.lineHeight },
      ],
      "mobile-sub-light": ["1.5625rem", { lineHeight: 1 }],
      "mobile-copy": [
        fontSizes.copy.sm.fontSize,
        { lineHeight: fontSizes.copy.sm.lineHeight },
      ],
      "mobile-head": [
        fontSizes.head.sm.fontSize,
        { lineHeight: fontSizes.head.sm.lineHeight },
      ],
      copy: [
        fontSizes.copy.lg.fontSize,
        { lineHeight: fontSizes.copy.lg.lineHeight },
      ],
      bu: [
        fontSizes.subtitle.md.fontSize,
        {
          lineHeight: fontSizes.subtitle.md.fontSize,
          letterSpacing: fontSizes.subtitle.md.letterSpacing,
        },
      ],
      head: [
        fontSizes.head.lg.fontSize,
        { lineHeight: fontSizes.head.lg.lineHeight },
      ],
      "sub-bold": [
        fontSizes.textHeadline.lg.fontSize,
        { lineHeight: fontSizes.textHeadline.lg.lineHeight },
      ],
      "sub-light": ["4.6875rem", { lineHeight: 1 }],
    },
    colors: {
      "grey-caption": "#D9D9D980",
    },
    extend: {},
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ...fontDefinitions,
      });
    }),
  ],
};

const fontDefinitions = {
  ".fd-highlight": {
    fontSize: fontSizes.highlight.sm.fontSize,
    lineHeight: fontSizes.highlight.sm.lineHeight,

    "@screen md": {
      fontSize: fontSizes.highlight.md.fontSize,
      lineHeight: fontSizes.highlight.md.lineHeight,
    },

    "@screen lg": {
      fontSize: fontSizes.highlight.lg.fontSize,
      lineHeight: fontSizes.highlight.lg.lineHeight,
    },

    "@screen xl": {
      fontSize: fontSizes.highlight.xl.fontSize,
      lineHeight: fontSizes.highlight.xl.lineHeight,
    },
  },
  ".fd-head": {
    fontSize: fontSizes.head.sm.fontSize,
    lineHeight: fontSizes.head.sm.lineHeight,
    fontFamily: fonts.nationalCompressedExtrabold,
    textTransform: "uppercase",

    "@screen md": {
      fontSize: fontSizes.head.md.fontSize,
      lineHeight: fontSizes.head.md.lineHeight,
    },

    "@screen lg": {
      fontSize: fontSizes.head.lg.fontSize,
      lineHeight: fontSizes.head.lg.lineHeight,
    },

    "@screen xl": {
      fontSize: fontSizes.head.xl.fontSize,
      lineHeight: fontSizes.head.xl.lineHeight,
    },
  },
  ".fd-subtitle": {
    fontSize: fontSizes.subtitle.sm.fontSize,
    lineHeight: fontSizes.subtitle.sm.lineHeight,
    letterSpacing: fontSizes.subtitle.sm.letterSpacing,
    fontFamily: fonts.nationalNarrowMedium,

    "@screen md": {
      fontSize: fontSizes.subtitle.md.fontSize,
      lineHeight: fontSizes.subtitle.md.lineHeight,
      letterSpacing: fontSizes.subtitle.md.letterSpacing,
    },
  },
  ".fd-textheadline": {
    fontSize: fontSizes.textHeadline.sm.fontSize,
    lineHeight: fontSizes.textHeadline.sm.lineHeight,
    letterSpacing: fontSizes.textHeadline.sm.letterSpacing,
    fontFamily: fonts.nationalNarrowMedium,

    "@screen md": {
      fontSize: fontSizes.textHeadline.md.fontSize,
      lineHeight: fontSizes.textHeadline.md.lineHeight,
      letterSpacing: fontSizes.textHeadline.md.letterSpacing,
    },

    "@screen lg": {
      fontSize: fontSizes.textHeadline.lg.fontSize,
      lineHeight: fontSizes.textHeadline.lg.lineHeight,
      letterSpacing: fontSizes.textHeadline.lg.letterSpacing,
    },
    "@screen xl": {
      fontSize: fontSizes.textHeadline.xl.fontSize,
      lineHeight: fontSizes.textHeadline.xl.lineHeight,
      letterSpacing: fontSizes.textHeadline.xl.letterSpacing,
    },
  },
  ".fd-text": {
    fontSize: fontSizes.copy.sm.fontSize,
    lineHeight: fontSizes.copy.sm.lineHeight,
    fontFamily: fonts.nationalNarrowMedium,

    "@screen md": {
      fontSize: fontSizes.copy.md.fontSize,
      lineHeight: fontSizes.copy.md.lineHeight,
    },

    "@screen lg": {
      fontSize: fontSizes.copy.lg.fontSize,
      lineHeight: fontSizes.copy.lg.lineHeight,
    },

    "@screen xl": {
      fontSize: fontSizes.copy.xl.fontSize,
      lineHeight: fontSizes.copy.xl.lineHeight,
    },
  },
};
