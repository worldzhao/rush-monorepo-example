module.exports = {
  plugins: [
    require.resolve("./plugin.js"),
    require.resolve("prettier-plugin-packagejson"),
  ],
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: true,
  semi: true,
  importOrder: [
    "polyfill",
    "^react",
    "<THIRD_PARTY_MODULES>",
    "^@.*",
    "^./(.*)",
    "^../(.*)",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
