const path = require('path')

module.exports = {
  // GitHub Pages serves from /vue-hotel/ subdirectory
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-hotel/' : '/',

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
    headers: { 'Access-Control-Allow-Origin': '*' },
    allowedHosts: 'all'
  },

  chainWebpack: config => {
    // Process .ts files with the same babel-loader used for .js
    config.module
      .rule('ts')
      .test(/\.ts$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
  },

  configureWebpack: config => {
    // Allow webpack to resolve .ts files alongside .js
    config.resolve.extensions = ['.ts', '.js', '.vue', '.json']

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
