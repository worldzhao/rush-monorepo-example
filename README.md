# Monorepo Supported By Rush and PNPM

> keywords: Monorepo/Rush/PNPM/React/CRA/UmiJS/TSDX

## Features

- Structures
  - apps
  - features: Packages that do not need to be released, only reused in this Monorepo.
  - packages: Packages that need to be released.
- CRA and Umi app example
- ESlint/Prettier integrated (auto fix only work with VSCode)
- Git hooks: commit-msg and pre-commit with Rush autoinstallers
- Solve the Rush `succeeded with warnings` problem
- Support PNPM workspace

## Quick Start

```shell
npm i @microsoft/rush@5.47.0 pnpm -g

git clone git@github.com:worldzhao/rush-monorepo-example.git

cd rush-monorepo-example

rush update

rush rebuild -T @rush-monorepo/cra-app

cd apps/cra-app

rushx start
```

More 👉 [应用级 Monorepo 优化方案](https://github.com/worldzhao/blog/issues/9)
