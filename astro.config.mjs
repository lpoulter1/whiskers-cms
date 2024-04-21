import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: "storyblok/Page",
        grid: "storyblok/Grid",
        services_Prices: "storyblok/services_Prices",
        "image-gallery": "storyblok/ImageGallery",
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    ,
    react(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
