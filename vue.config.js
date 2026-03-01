const path = require('path')

module.exports = {
  // Skip source maps in production to reduce bundle size
  productionSourceMap: false,

  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          // Allow @import "src/styles/app" bare paths used throughout the project
          loadPaths: [path.resolve(__dirname)]
        }
      }
    }
  },

  devServer: {
    proxy: 'http://localhost:3000',
    headers: { 'Access-Control-Allow-Origin': '*' },
    disableHostCheck: true
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // Warn when a single asset exceeds 512 KB and error at 1 MB
      config.performance = {
        hints: 'warning',
        maxAssetSize: 512 * 1024,
        maxEntrypointSize: 1024 * 1024
      }
    }
  }
}
