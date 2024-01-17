import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  css: {
    devSourcemap: true,
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, '/'),
        second: resolve(__dirname, '/second/'),
      },
    },
  },
  resolve: {
    alias: {
      '@styles': resolve(__dirname, 'src/styles'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@fonts': resolve(__dirname, 'public/fonts'),
    },
  },
});
