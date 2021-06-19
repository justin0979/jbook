const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".css",
      ".scss",
      ".jpg",
      ".jpeg",
      ".png",
      ".svg",
      ".gif",
      ".ttf",
      ".woff",
      ".woff2",
      ".eot",
      "mp4",
      "webm",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff(2)?|eot|mp4|webm)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024 // 3 kBs
          }
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon-32x32.png",
      meta: {
        viewport: "width=device-width, initial-scale=1",
      },
    }),
    new CleanWebpackPlugin(),
    //    new CopyWebpackPlugin({
    //      patterns: [
    //        {
    //          from: "public",
    //        },
    //      ],
    //    }),
  ],
};
