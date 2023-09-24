import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@atoms': path.resolve(__dirname, './src/components/atoms/index.ts'),
      '@molecules': path.resolve(__dirname, './src/components/molecules/index.ts'),
      '@organisms': path.resolve(__dirname, './src/components/organisms/index.ts'),
      '@templates': path.resolve(__dirname, './src/components/templates/index.ts'),
      '@pages': path.resolve(__dirname, './src/pages/index.ts'),
      '@hooks': path.resolve(__dirname, './src/hooks/index.ts'),
      '@types': path.resolve(__dirname, './src/types/index.ts'),
      '@setup': path.resolve(__dirname, './src/setup'),
    },
  },
  base: '/',
  plugins: [react()],
});
