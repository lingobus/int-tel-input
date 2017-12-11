/*eslint-env node */
module.exports = {
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  externals: {
    'vue': 'Vue',
    'element-ui': 'element-ui'
  }
};