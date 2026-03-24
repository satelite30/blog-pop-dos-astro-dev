// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Modo 'static' para generación estática de todas las páginas
export default defineConfig({
  output: 'static',
  site: 'https://satelite30.github.io/',
  base: '/blog-pop-dos-astro-dev/'
});