module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'react/no-unescaped-entities': 'off',
    'react/sort-comp': 'off'
  },
  globals: {
    fetch: false
  }
};
