import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: { port: 3000 },
  build: isSsrBuild
    // Server bundle used only by scripts/prerender.mjs to render each route to static HTML.
    ? { outDir: 'build-ssr', rollupOptions: { output: { entryFileNames: '[name].mjs' } } }
    : { outDir: 'build' },
}));
