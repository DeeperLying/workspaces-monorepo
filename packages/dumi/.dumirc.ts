import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@xiaomaibupor/dumi',
  },
  base: '/workspaces-monorepo/',
  publicPath: '/workspaces-monorepo',
});
