/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

function ptr(px) {
  return `${px / 16}rem`;
}

function pxToRem(px) {
  return ptr(px);
}

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
  headbold: {
    sm: {
      fontSize: ptr(40),
      lineHeight: 0.85,
    },
    md: {
      fontSize: "clamp(2.5rem, 10vw, 8rem)",
    },
    lg: {
      fontSize: "clamp(8rem, 10vw, 9.9375rem)",
    },
    xl: {
      fontSize: "clamp(13.4375rem, 10.5vw, 17.5rem)",
    },
  },
  headlight: {
    sm: {
      fontSize: ptr(31),
      lineHeight: 1.09,
    },
    md: {
      fontSize: "clamp(1.9375rem, 6vw, 5.625rem)",
      lineHeight: 1.22,
    },
    lg: {
      fontSize: "clamp(5.625rem, 5.9vw, 7.1875rem)",
    },
    xl: {
      fontSize: "clamp(7.1875rem, 10.5vw, 9.6875rem)",
      lineHeight: 1.19,
    },
  },
  subbold: {
    sm: {
      fontSize: ptr(30),
      lineHeight: 0.9,
    },
    md: {
      fontSize: "clamp(1.875rem, 4.7vw, 4.375rem)",
      lineHeight: 0.85,
    },
    lg: {
      fontSize: "clamp(4.375rem, 6vw, 5.625rem)",
      lineHeight: 0.94,
    },
    xl: {
      fontSize: "clamp(5.625rem, 6.25vw, 7.5rem)",
      lineHeight: 0.92,
    },
  },
  sublight: {
    sm: {
      fontSize: ptr(23),
      lineHeight: 1.17,
    },
    md: {
      fontSize: "clamp(1.4375rem, 3.3vw, 3.6875rem)",
      lineHeight: 1.01,
    },
    lg: {
      fontSize: "clamp(3.6875rem, 3.9vw, 4.6875rem)",
      lineHeight: 1.13,
    },
    xl: {
      fontSize: "clamp(4.6875rem, 3.9vw, 6.25rem)",
      lineHeight: 1.1,
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
      lineHeight: 1.3,
    },
    md: {
      fontSize: "clamp(1.5rem, 2.4vw, 2.3125rem)",
    },
    lg: {
      fontSize: "clamp(2.3125rem, 2.6vw, 3.125rem)",
    },
    xl: {
      fontSize: "clamp(3.125rem, 2.6vw, 4.125rem)",
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
      "mobile-sub-light": ["1.5625rem", { lineHeight: 1 }],
      "mobile-copy": [
        fontSizes.copy.sm.fontSize,
        { lineHeight: fontSizes.copy.sm.lineHeight },
      ],
      "mobile-head": [
        fontSizes.headbold.sm.fontSize,
        { lineHeight: fontSizes.headbold.sm.lineHeight },
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
        fontSizes.headbold.lg.fontSize,
        { lineHeight: fontSizes.headbold.lg.lineHeight },
      ],
      "sub-light": [fontSizes.sublight.lg.fontSize, { lineHeight: 1 }],
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
      overflowWrap: "break-word",
    },
  },
  ".fd-headbold": {
    fontSize: fontSizes.headbold.sm.fontSize,
    fontFamily: fonts.nationalCompressedExtrabold,
    lineHeight: fontSizes.headbold.sm.lineHeight,
    textTransform: "uppercase",

    "@screen md": {
      fontSize: fontSizes.headbold.md.fontSize,
    },

    "@screen lg": {
      fontSize: fontSizes.headbold.lg.fontSize,
    },

    "@screen xl": {
      fontSize: fontSizes.headbold.xl.fontSize,
      lineHeight: fontSizes.headbold.xl.lineHeight,
    },
  },
  ".fd-headlight": {
    fontSize: fontSizes.headlight.sm.fontSize,
    fontFamily: fonts.editorialnew,
    lineHeight: fontSizes.headlight.sm.lineHeight,

    "@screen md": {
      fontSize: fontSizes.headlight.md.fontSize,
      lineHeight: fontSizes.headlight.md.lineHeight,
    },

    "@screen lg": {
      fontSize: fontSizes.headlight.lg.fontSize,
    },

    "@screen xl": {
      fontSize: fontSizes.headbold.xl.fontSize,
      lineHeight: fontSizes.headlight.xl.lineHeight,
      lineHeight: fontSizes.headlight.xl.lineHeight,
    },
  },
  ".fd-subbold": {
    fontSize: fontSizes.subbold.sm.fontSize,
    lineHeight: fontSizes.subbold.sm.lineHeight,
    fontFamily: fonts.nationalCompressedExtrabold,
    textTransform: "uppercase",

    "@screen md": {
      fontSize: fontSizes.subbold.md.fontSize,
      lineHeight: fontSizes.subbold.md.lineHeight,
    },

    "@screen lg": {
      fontSize: fontSizes.subbold.lg.fontSize,
      lineHeight: fontSizes.subbold.lg.lineHeight,
    },

    "@screen xl": {
      fontSize: fontSizes.subbold.xl.fontSize,
      lineHeight: fontSizes.subbold.xl.lineHeight,
    },
  },
  ".fd-sublight": {
    fontSize: fontSizes.sublight.sm.fontSize,
    lineHeight: fontSizes.sublight.sm.lineHeight,
    fontFamily: fonts.ppeditorialnew,

    "@screen md": {
      fontSize: fontSizes.sublight.md.fontSize,
      lineHeight: fontSizes.sublight.md.lineHeight,
    },

    "@screen lg": {
      fontSize: fontSizes.sublight.lg.fontSize,
      lineHeight: fontSizes.sublight.lg.lineHeight,
    },

    "@screen xl": {
      fontSize: fontSizes.sublight.xl.fontSize,
      lineHeight: fontSizes.sublight.xl.lineHeight,
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
  ".fd-copy": {
    fontSize: fontSizes.copy.sm.fontSize,
    lineHeight: fontSizes.copy.sm.lineHeight,
    fontFamily: fonts.nationalNarrowMedium,

    "@screen md": {
      fontSize: fontSizes.copy.md.fontSize,
    },

    "@screen lg": {
      fontSize: fontSizes.copy.lg.fontSize,
    },

    "@screen xl": {
      fontSize: fontSizes.copy.xl.fontSize,
    },
  },
  ".fd-kirbytext": {
    fontSize: fontSizes.subtitle.sm.fontSize,
    lineHeight: fontSizes.subtitle.sm.lineHeight,
    fontFamily: fonts.nationalNarrowMedium,

    "@screen md": {
      fontSize: fontSizes.subtitle.md.fontSize,
      lineHeight: fontSizes.subtitle.md.lineHeight,
    },

    h4: {
      fontSize: "1.5625rem",
      lineHeight: "2rem",
      fontWeight: "normal",
      marginBottom: "0.5rem",

      "@screen md": {
        fontSize: "3.125rem",
        lineHeight: "3.875rem",
        marginBottom: "1rem",
      },

      a: {
        textDecoration: "underline",
      },
    },

    "p + h4": {
      marginTop: "0.5rem",

      "@screen md": {
        marginTop: "1rem",
      },
    },
  },
};
