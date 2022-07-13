const webpack = require('webpack')
const path = require('path');
const dotenv = require('dotenv')
const dotenvParseVariables = require('dotenv-parse-variables')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

var mode = process.env.mode || 'development'

function parseEnv() {
  var env = dotenv.config({
    path: './frontend/.env.' + mode,
  })
  if (env.error) throw env.error
  return dotenvParseVariables(env.parsed)
}

module.exports = {
  entry: {
    assignment: './frontend/src/index.jsx',  // path to our input file
  },
  mode: mode,
  plugins: [
    new webpack.EnvironmentPlugin(parseEnv()),
    new NodePolyfillPlugin(),
    new MiniCssExtractPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',  // output bundle file name
    path: path.resolve(__dirname, 'frontend/dist'),  // path to our Django static directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] }
      },{
        test: /\.css$/,
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'frontend/src/'),
    },
    fallback: {
      fs: false,
    },
    extensions: ['*', '.js', '.jsx'],
  },

  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};
