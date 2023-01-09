// @anfu
process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {
  extends: '@antfu',
  rules: {
    'semi': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  },
};
