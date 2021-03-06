module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'standard',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'camelcase' : 0,
    'no-undef': 0,
    'space-before-function-paren': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'eqeqeq': 0,
    'no-callback-literal': 0,
    'space-infix-ops': 0
  }
}
