const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  entry: ["./src/index", "./public/index.html"],
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "",
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    host: "0.0.0.0", // add for docker
    hot: true,
    historyApiFallback: {
      index: "index.html",
    },
    overlay: true,
    writeToDisk: true,
    // public: "posts.com" // change to whatever host name is (e.g., "client:80" or "ticketing.dex")
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(
                  __dirname,
                  "postcss.config.js",
                ),
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
});
