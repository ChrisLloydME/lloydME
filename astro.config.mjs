import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chrislloydme.github.io',
  base: '/lloydME',
  vite: {
    plugins: [tailwindcss()],
  },
});
