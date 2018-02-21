var path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var DIST_DIR = path.join(__dirname, "dist"),
  CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
  devtool: "source-map",
  context: CLIENT_DIR,

  entry: ["webpack-hot-middleware/client", "./main"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["react", "es2015", "stage-2"]
          }
        }
        // loader: "babel-loader"
        // query: {
        // presets: ["react", "es2015", "transform-object-rest-spread"]
        //   presets: ["react", "es2015", "stage-2"]
        // }
      }
    ]
  },

  resolve: {
    extensions: [".js"]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
