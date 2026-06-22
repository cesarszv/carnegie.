// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://cesarszv.github.io',
  base: '/carnegie./',
  build: {
    format: 'file'
  }
});
