
//---------------------------------------webpack.config-----------------------------//

var path = require('path');
module.exports = {
  entry: './index.js',
 output: { path: __dirname, filename: 'bundle.js'},
  module: {
      loaders: [
          { test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel", 
            query: 
            {
              presets:['react','es2015']}
            }
            
//             {
//             test: /.jsx?$/,
//             loader: 'babel-loader',
//             exclude: /node_modules/,
//             query: {
//               presets: ['es2015', 'react']}
//             },
      ]
  }
};