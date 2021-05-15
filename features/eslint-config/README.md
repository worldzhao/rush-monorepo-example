# Eslint Config for Rush Monorepo

> [eslint-config-ali](https://www.npmjs.com/package/eslint-config-ali) with [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch)

## Basic

```js
module.exports = {
  extends: '@rush-monorepo/eslint-config',
};
```

## React

```js
module.exports = {
  extends: '@rush-monorepo/eslint-config/react',
};
```

### a11y support

```js
module.exports = {
  extends: ['@rush-monorepo/eslint-config/react', '@rush-monorepo/eslint-config/jsx-a11y'],
};
```

## Basic with TypeScript

```js
module.exports = {
  extends: '@rush-monorepo/eslint-config/typescript',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
```

## React with TypeScript

```js
module.exports = {
  extends: '@rush-monorepo/eslint-config/typescript/react',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
};
```

### a11y support

```js
module.exports = {
  extends: [
    '@rush-monorepo/eslint-config/typescript/react',
    '@rush-monorepo/eslint-config/jsx-a11y',
  ],
};
```

## work with Prettier

Take `TS React` project for example.

```js
module.exports = {
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
```
