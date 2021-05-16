/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');
/* eslint-enable @typescript-eslint/no-require-imports */

const resolvePackage = (relativePath) => path.join(__dirname, relativePath);

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(webpackConfig, loaderByName('babel-loader'));
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat([resolvePackage('../../features')]);
      }
      return webpackConfig;
    },
  },
};
