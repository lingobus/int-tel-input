/*eslint-env node */
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.js')

let webpackConfig = merge(baseWebpackConfig, {
  entry: './src',
  output: {
    library: 'IntTelInput',
    libraryTarget: 'umd',
    filename: 'int-tel-input.js',
    path: path.resolve(__dirname, 'dist')
  }
})

module.exports = webpackConfig
