import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import editorialGate from "./scripts/editorial-gate-integration.mjs";

export default defineConfig({
  site: "https://verahealthnotes.com",
  integrations: [
    editorialGate(),
    sitemap({
      filenameBase: "astro-sitemap",
      filter: (url) => !["/404", "/404/", "/404.html/", "/404.html"].includes(new URL(url).pathname)
    })
  ]
});
