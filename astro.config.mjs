import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import htmlBeautify from 'astro-html-beautifier';

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [vue(), htmlBeautify()],
});
