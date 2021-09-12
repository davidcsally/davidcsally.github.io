module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
    'plugin:cypress/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    // doesnt work with typescript / airbnb
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    // Flags type imports :/
    'no-unused-vars': 0,
    // TS implicitly does this
    'react/prop-types': 0,
    // My prefs
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-array-index-key': 0,
    'react/jsx-one-expression-per-line': 0,

    //
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 0,

    semi: ['error', 'never'],
  },
}
