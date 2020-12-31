// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
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
    plugins: [
      // new ImageMinimizerPlugin({
      //   maxConcurrency: 3,
      //   minimizerOptions: {
      //     plugins: [
      //       ['gifsicle', { interlaced: true, optimizationLevel: 1 }],
      //       ['jpegtran', { progressive: true }],
      //       ['optipng', { optimizationLevel: 5, interlaced: true }]
      //     ]
      //   }
      // })
      // ,
      // new MiniCssExtractPlugin({
      //   linkType: 'text/css'
      // })
    ],
    module: {
      // rules: [
      //   {
      //     test: /\.(jpe?g|png|gif|svg)$/i,
      //     use: [
      //       {
      //         loader: 'file-loader'
      //       }
      //     ]
      //   }
      // ,
      // {
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader'
      //   ]
      // }
      // ]
    }
  }
}
