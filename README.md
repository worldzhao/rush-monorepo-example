# Monorepo Supported By Rush and PNPM

> keywords: Monorepo/Rush/PNPM/React/CRA

## Features

- Structures
  - apps
  - features: packages that do not need to be released, only reused in this Monorepo
  - packages: packages that need to be released
  - tools: common tools for all projects
- create-react-app example
- commitlint/eslint/prettier/lint-staged integrated
- commit-msg and pre-commit hooks

## Quick Start

```shell
npm i @microsoft/rush pnpm -g

git clone git@github.com:worldzhao/rush-monorepo-example.git

cd rush-monorepo-example

rush update

# build dependencies of our app at first
rush build -T @rush-monorepo/cra-app

cd apps/cra-app

# start app
rushx start # or npm start
```

More 👉 [应用级 Monorepo 优化方案](https://github.com/worldzhao/blog/issues/9)
