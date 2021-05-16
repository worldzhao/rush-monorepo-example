import { defineConfig } from 'umi';
import path from 'path';

const resolvePackage = (relativePath: string) => path.join(__dirname, relativePath);

const extraBabelIncludes = [resolvePackage('../../features')];

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  chainWebpack($) {
    $.module.rules.get('ts-in-node_modules').include.add(extraBabelIncludes);
  },
});
