import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Import nécessaire pour définir les chemins

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.lottie'],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'), // Définition de l'alias pour `@`
    },
  },
});
