import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://amirsystems.co.il',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'he',
    locales: ['he'],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
})
