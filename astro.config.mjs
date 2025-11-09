// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
const CONFIG = {
  vite: { plugins: [tailwindcss()] },
  site: "https://enmanuel-ve.github.io",
  base: "/portfolio",
  server: { port: 3000 }
}

export default defineConfig(CONFIG);
