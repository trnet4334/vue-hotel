const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  devServer: {
    proxy: 'http://localhost:3000',
    headers: { 'Access-Control-Allow-Origin': '*' },
    disableHostCheck: true
  },
  // For Github pages deploy
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-hotel/' : '/'
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader'
            },
            {
              loader: ImageMinimizerPlugin.loader,
              options: {
                cache: true,
                minimizerOptions: {
                  plugins: [
                    ['gifsicle', { interlaced: true, optimizationLevel: 2 }],
                    ['mozjpeg', { quality: 80 }],
                    ['pngquant', { speed: 7, quality: [0.6, 0.8] }]
                  ]
                }
              }
            }
          ]
        }
      ]
    }
  }
}
