/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies

const {
  override, overrideDevServer, watchAll, addWebpackAlias, addBabelPreset, useBabelRc,
} = require('customize-cra');

const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const zlib = require('zlib');
const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    minRatio: 0.5,
    deleteOriginalAssets: false,
  }),

  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  // new webpack.optimize.AggressiveMergingPlugin(),
  new CleanWebpackPlugin(),
  // eslint-disable-next-line no-useless-escape
  new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|zh-tw)$/),
];

const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
    config.plugins.push(...customizePlugin);
    config.devServer = {
      historyApiFallback: true,
    };
    config.output = {
      ...config.output,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
    };
    config = {
      ...config,
      optimization: {
        minimizer: [
          new UglifyJsPlugin(),
        ],
      },
    };
  } else if (process.env.NODE_ENV === 'development') {
    config.devServer = {
      ...config,
      port: 8080,
      historyApiFallback: true,
    };
  }

  return config;
};

const devServerConfig = () => (config) => ({
  ...config,
  port: 8080,
  historyApiFallback: true,
});

module.exports = {
  webpack: override(
    addCustomize(),
    useBabelRc(),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@page': path.resolve(__dirname, 'src/page/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
    }),
    addBabelPreset(
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV === 'development',
        },
      ],
    ),
  ),
  jest: (config) => config,
  devServer: overrideDevServer(devServerConfig()),
  paths: (paths, env) => paths,

};
