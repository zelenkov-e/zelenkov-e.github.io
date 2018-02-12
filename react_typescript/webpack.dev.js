 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
// const React = require('react');

 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   }
 });