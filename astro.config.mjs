import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      nesting: true,
    }),
    sitemap({
      filter: (page) =>
        page !== "https://www.klebermetzler.com/preview/" &&
        page !== "https://beta.klebermetzler.com/preview/",
    }),
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  image: {
    domains: ["cms.klebermetzler.com", "cms.klebermetzler.test"],
  },
  site: "https://beta.klebermetzler.com",
});
