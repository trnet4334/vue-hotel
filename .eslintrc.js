module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // Disallow console/debugger statements in production builds
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Formatting
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

    // Vue-specific
    'vue/no-unused-components': 'warn',
    'vue/no-v-html': 'warn',
    'vue/order-in-components': ['error', {
      order: [
        'el', 'name', 'key', 'parent', 'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends', 'mixins', ['provide', 'inject'],
        'ROUTER_GUARDS', 'layout', 'middleware', 'validate', 'scrollToTop',
        'transition', 'loading', 'inheritAttrs', 'model',
        ['props', 'propsData'],
        'emits', 'setup', 'asyncData', 'data', 'fetch',
        'head', 'computed', 'watch', 'watchQuery', 'LIFECYCLE_HOOKS',
        'methods', ['template', 'render'], 'renderError'
      ]
    }]
  }
}
