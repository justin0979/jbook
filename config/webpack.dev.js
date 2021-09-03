const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  entry: ['./src/index'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'auto',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    host: '0.0.0.0', // add for docker
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    // public: "posts.com" // change to whatever host name is (e.g., "client:80" or "ticketing.dex")
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(
                  __dirname,
                  'postcss.config.js',
                ),
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),

    //    new HtmlWebpackPlugin({
    //      filename: "test.html",
    //      template: "./public/test.html",
    //      favicon: "./public/favicon-32x32.png",
    //      meta: {
    //        viewport: "width=device-width, initial-scale=1",
    //      },
    //    }),
  ],
});
