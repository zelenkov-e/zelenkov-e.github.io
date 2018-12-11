var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var DIST_DIR = path.join(__dirname, 'dist'),
  CLIENT_DIR = path.join(__dirname, 'src');

module.exports = {
  context: CLIENT_DIR,

  entry: ['webpack-hot-middleware/client', './main'],

  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
