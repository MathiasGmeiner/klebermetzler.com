import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      nesting: true,
    }),
    sitemap(),
  ],
  output: "hybrid",
  adapter: vercel({
    //imageService: true,
    isr: {
      expiration: 60 * 60 * 24,
    },
  }),
  image: {
    domains: ["cms.klebermetzler.com", "cms.klebermetzler.test"],
  },
  site: "https://beta.klebermetzler.com",
});
