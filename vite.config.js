import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/Components'), // Alias for components
      '@pages': path.resolve(__dirname, './src/Pages'), // Alias for pages if needed
      '@styles': path.resolve(__dirname, './src/styles'), // Alias for styles
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables.scss";`, // Use alias for styles path
      },
    },
  },
});
