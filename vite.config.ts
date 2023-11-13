/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    css: true,
    globals: true,
    setupFiles: './src/Tests/Tests.ts',
    coverage: {
      include: ['src'],
      exclude: [
        'src/App.tsx',
        'src/main.tsx',
        'src/modules',
        '**/*.d.ts',
        'src/Tests',
      ],
      provider: 'v8',
    },
    watch: false,
  },
});
