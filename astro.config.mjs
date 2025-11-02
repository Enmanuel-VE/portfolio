// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
const config = {
  vite: {
    plugins: [tailwindcss()],
    base: "/portfolio/",
  },
};

export default defineConfig(config);
