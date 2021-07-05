/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies

const { override, overrideDevServer, watchAll } = require('customize-cra');

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const customizePlugin = [
  new CompressionWebpackPlugin({
    filename: '[path].br',
    algorithm: 'brotliCompress',
    test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
    compressionOptions: {
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      },
    },
    threshold: 10240,
    minRatio: 0.7,
    deleteOriginalAssets: false,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new CleanWebpackPlugin(),
];

const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
    config.plugins.push(...customizePlugin);
  }
  return config;
};

module.exports = {
  webpack: override(
    addCustomize(),
  ),
  jest: (config) => config,
  devServer: overrideDevServer(watchAll()),
  paths: (paths, env) => paths,

};
