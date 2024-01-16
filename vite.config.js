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
        index: resolve(__dirname, '/index.html'),
        second: resolve(__dirname, '/src/pages/second/second.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@styles': resolve(__dirname, 'src/styles'),
      '@pages': resolve(__dirname, 'src/pages'),
    },
  },
});
