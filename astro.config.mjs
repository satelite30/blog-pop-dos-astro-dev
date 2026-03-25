// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
// Modo 'static' para generación estática de todas las páginas
export default defineConfig({
  output: 'static',
  site: 'https://blog.popular-esmedellin.com',
  trailingSlash: 'always',

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ]

  
});


