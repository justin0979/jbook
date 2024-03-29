const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  entry: ['./src/index'],
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '',
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
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
});
