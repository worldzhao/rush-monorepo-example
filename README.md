# Monorepo Supported By Rush and PNPM

> keywords: Monorepo/Rush/PNPM/React/Umi/TSDX

## Features

- good structures
  - apps
  - features: Packages that do not need to be released, only reused in this Monorepo.
  - packages:Packages that need to be released.
- Eslint/Prettier integrated (auto fix only work with VSCode)
- git hooks: commit-msg and pre-commit with Rush autoinstallers
- solve the Rush `succeeded with warnings` problem
- support PNPM workspace

## Quick Start

```shell
npm i @microsoft/rush@5.47.0 pnpm -g

git clone git@github.com:worldzhao/rush-monorepo-example.git

cd rush-monorepo-example

rush update

rush rebuild -T @rush-monorepo/example-app

cd apps/example-app

rushx start
```

More 👉 [应用级 Monorepo 优化方案](https://github.com/worldzhao/blog/issues/9)
