var webpack = require("webpack");
const path = require("path");
var src_dir = path.resolve(__dirname, "src");
var dist_dir = path.resolve(__dirname, "dist");
module.exports = {
  entry: src_dir + "/app/index.js",
  mode: "development",
  output: {
    path: dist_dir + "/app",
    filename: "bundle.js",
    publicPath: "/app/",
  },

  module: {
    rules: [
      {
        test: /\.js?/,
        include: src_dir,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
  },
};
