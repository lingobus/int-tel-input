/*eslint-env node */
module.exports = {
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.(?:png|jpe?g|svg)$/, use: 'file-loader'}
    ]
  },
  externals: {
    'vue': 'Vue'
  }
};