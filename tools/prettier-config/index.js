module.exports = {
  plugins: [
    require("@trivago/prettier-plugin-sort-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: true,
  semi: true,
  importOrder: ["^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
