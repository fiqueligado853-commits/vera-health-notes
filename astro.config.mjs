import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://vera-health-notes.pages.dev",
  integrations: [
    sitemap({
      filenameBase: "astro-sitemap"
    })
  ]
});
