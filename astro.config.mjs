import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://vera-health-notes.pages.dev",
  integrations: [
    sitemap({
      filenameBase: "astro-sitemap",
      filter: (url) => !["/404", "/404/", "/404.html/", "/404.html"].includes(new URL(url).pathname)
    })
  ]
});
