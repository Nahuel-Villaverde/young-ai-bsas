import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://astro-project-gray.vercel.app/', // URL de tu sitio
  integrations: [sitemap(), react()],
});