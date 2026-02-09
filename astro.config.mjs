// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'es', 'pt', 'it', 'de', 'id', 'ms', 'tr', 'nl', 'no', 'th', 'da', 'fi', 'ko', 'pl', 'ro', 'hu', 'lt', 'lv', 'et', 'el', 'sk', 'sl', 'hr', 'cs', 'vi', 'uk', 'sv', 'fr', 'fil',
    ],
    routing: { prefixDefaultLocale: false },
  },
});
