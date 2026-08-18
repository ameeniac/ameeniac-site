import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ameeniac.com',
  markdown: {
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
