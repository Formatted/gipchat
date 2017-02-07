const path = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'envify',
  entry: `${__dirname}/src/index.jsx`,

  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',

  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'babel-preset-stage-0'],
        },
      },
    ],
  },
};


module.exports = config;
