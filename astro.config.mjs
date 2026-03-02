// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. La URL base de la cuenta o la organización en GitHub
  site: 'https://CODES-UNLU.github.io',

  // 2. El nombre del repositorio donde se alojará el sitio
  base: '/WebE-Sports/',

  // Configuración actual de Tailwind v4
  vite: {
    plugins: [tailwindcss()]
  }
});