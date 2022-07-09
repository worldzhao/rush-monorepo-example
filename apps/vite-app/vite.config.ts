import path from 'path';
import { defineConfig } from 'vite';
import { splitVendorChunkPlugin } from 'vite';
import checker from 'vite-plugin-checker';
import viteImagemin from 'vite-plugin-imagemin';
import inspect from 'vite-plugin-inspect';
import pages from 'vite-plugin-pages';
import svgr from 'vite-plugin-svgr';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src/'),
    },
  },
  plugins: [
    inspect(),
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    pages(),
    svgr(),
    checker({ typescript: true }),
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7,
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9],
      },
      // svg 优化
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    splitVendorChunkPlugin(),
  ],
  build: {
    target: 'es2015',
    cssTarget: 'chrome61',
  },
});
