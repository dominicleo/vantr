module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-idiomatic-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'block-closing-brace-newline-before': null,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'declaration-colon-newline-after': null,
  },
  ignoreFiles: ['node_modules/**/*', '**/*.ts', '**/*.tsx'],
};
