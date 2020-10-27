module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  },
  publicPath: ''
  // For Github pages deploy
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-hotel/' : '/'
}
