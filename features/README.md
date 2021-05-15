Feature means the package that do not need to be released, only reused in this Monorepo.

Also, the package do not need to be built, just replace the `main` field in package.json with the source code entry, like "src/index.tsx".

Just configure the host app webpack config to build our features.
