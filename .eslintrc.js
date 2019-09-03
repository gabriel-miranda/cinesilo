module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': [2, 'always-multiline'],
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowTernary: true,
      },
    ],
    semi: [
      2,
      'always',
      {
        omitLastInOneLineBlock: true,
      },
    ],
    'newline-per-chained-call': 0,
    'no-param-reassign': 0,
    'no-use-before-define': [
      2,
      {
        functions: false,
        classes: false,
      },
    ],
    'no-confusing-arrow': 0,
    'no-return-await': 0,
    'function-paren-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/anchor-has-content': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '**/*.setup.js'],
      },
    ],
    'no-underscore-dangle': 0,
    'react/button-has-type': 0,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js'],
      },
    },
  },
};
