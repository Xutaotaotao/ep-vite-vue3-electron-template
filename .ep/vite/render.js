import vue from '@vitejs/plugin-vue'
import { builtinModules } from "module";
import { fileURLToPath } from 'url';
import { cwd } from 'node:process';
import path from "path";

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const config = {
  root: cwd(),
  base: './',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../../src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "../../dist/render"),
    minify: true,
    assetsInlineLimit: 1048576,
    emptyOutDir: true,
    brotliSize: false,
    chunkSizeWarningLimit: 2048,
    rollupOptions: {
      external: [...builtinModules],
    },
  },
  plugins: [vue()],
};
export default config;
