module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  plugins: [
    // Enable element-ui JS tree-shaking.
    // style:false keeps CSS handled by styles.scss (with custom theme color).
    ['component', { libraryName: 'element-ui', style: false }]
  ]
}
