// https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31
// https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/9
const tailwindPlugin = require("prettier-plugin-tailwindcss");
const sortImportsPlugin = require("@trivago/prettier-plugin-sort-imports");

module.exports = {
  parsers: {
    typescript: {
      ...tailwindPlugin.parsers.typescript,
      preprocess: sortImportsPlugin.parsers.typescript.preprocess,
    },
  },
  options: {
    ...sortImportsPlugin.options,
  },
};
