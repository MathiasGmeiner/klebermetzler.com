import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    tailwind({
      nesting: true,
    }),
  ],
  adapter: vercel({
    imageService: true,
  }),
  image: {
    domains: ["cms.klebermetzler.com", "cms.klebermetzler.test"],
  },
});
