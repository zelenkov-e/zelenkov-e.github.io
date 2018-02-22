const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST_DIR = path.join(__dirname, "dist");
CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
  devtool: " inline-source-map ",
  context: CLIENT_DIR,

  entry: ["webpack-hot-middleware/client", "./main"],
  output: {
    path: DIST_DIR,
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
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "awesome-typescript-loader"
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
