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
			filter: (page) => page !== "https://www.klebermetzler.com/preview/",
		}),
	],
	output: "hybrid",
	adapter: node({
		mode: "standalone",
	}),
	image: {
		domains: ["cms.klebermetzler.com", "cms.klebermetzler.test"],
	},
	site: "https://www.klebermetzler.com",
	experimental: {
		rewriting: true,
	},
});
