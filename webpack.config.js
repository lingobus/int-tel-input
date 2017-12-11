/*eslint-env node */
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
var options = require('./webpack.base.js');
options.entry = './src';
options.output = {
  library: 'IntTelInput',
  libraryTarget: 'umd',
  filename: 'int-tel-input.js',
  path: path.resolve(__dirname, 'dist')
};
module.exports = options;
