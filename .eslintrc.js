module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    // ecmaVersion用来指定 ECMAScript 版本
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import', 'react'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
