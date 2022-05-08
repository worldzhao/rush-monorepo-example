module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix'],
  '**/*.*.{css,less,md,json}': ['prettier --write'],
};
