const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const FaviconWebpackPlugin = require('favicons-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  mode: 'production',
  devtool: 'none',
  output: {
    filename: './scripts/[name].[contenthash].js',
    chunkFilename: './scripts/[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCssAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '-',
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          chunks: 'all',
          name: 'react-vendor',
        },
        firebase: {
          test: /[\\/]node_modules[\\/](firebase|@firebase)[\\/]/,
          chunks: 'all',
          name: 'firebase-vendor',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|mp4|svg|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            outputPath: 'assets',
            name: '[contenthash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new FaviconWebpackPlugin('./src/assets/brand/cupcake-logo.png'),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      minify: {
        removeComments: true,
        removeRedundantAttributes: true,
        collapseWhitespace: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]-[contenthash].css',
      chunkFilename: 'css/[name]-[contenthash].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['***'],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: true,
    }),
  ],
};
