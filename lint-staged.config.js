module.exports = {
  'packages/**/*.{ts,tsx}': ['prettier -c --write'],
  'packages/**/*.less': ['stylelint --fix'],
};
