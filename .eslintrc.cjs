module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', "plugin:prettier/recommended"],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // 'no-unused-vars': 'off',
    'prettier/prettier': ['error', { printWidth: 120 }],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    "@typescript-eslint/no-empty-interface": "off",
    'prefer-const': 'off',
  },
};
