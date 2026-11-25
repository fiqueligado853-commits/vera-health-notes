import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://verahealthnotes.com",
  integrations: [
    sitemap({
      filenameBase: "astro-sitemap",
      filter: (url) => !["/404", "/404/", "/404.html/", "/404.html"].includes(new URL(url).pathname)
    })
  ]
});
