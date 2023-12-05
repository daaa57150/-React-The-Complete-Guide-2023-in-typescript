import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
        { find: '@components', replacement: path.resolve(__dirname, './src/components') },
        { find: '@models', replacement: path.resolve(__dirname, './src/models') },
        { find: '@shared', replacement: path.resolve(__dirname, './src/shared') },
        { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
        { find: '@store', replacement: path.resolve(__dirname, './src/store') },
    ],
  }
})
