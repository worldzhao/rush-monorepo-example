module.exports = {
  root: true,
  extends: [
    '@rush-monorepo/eslint-config/typescript/react',
    '@rush-monorepo/eslint-config/prettier',
  ],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
