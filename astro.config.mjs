import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://adminbrighthorizon-hash.github.io',
  base: '/copakgt-website',
  adapter: cloudflare(),
});