// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://liorshalev01.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
