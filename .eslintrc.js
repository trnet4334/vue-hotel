module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  rules: {
    // Disallow debug console in production; allow console.error/warn for logging
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Formatting
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

    // Vue-specific (warn only — pre-existing issues fixed in Vue 3 migration)
    'vue/multi-word-component-names': 'warn',
    'vue/no-reserved-component-names': 'warn',
    'vue/no-unused-components': 'warn',
    'vue/no-v-html': 'warn',
    'vue/order-in-components': ['warn', {
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
