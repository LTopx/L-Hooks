import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/LHooks',
  publicPath: '/LHooks/',
  outputPath: 'dist',
  favicons: ['/LHooks/logo.svg'],
  themeConfig: {
    name: 'LHooks',
    logo: '/LHooks/logo.svg',
    socialLinks: {
      github: 'https://github.com/Peek-A-Booo/LHooks',
    },
  },
});
