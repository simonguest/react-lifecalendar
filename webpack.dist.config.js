var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  entry: [
    './src/index'
  ],
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /LifeCalendar\.js/,
        loader: "expose?LifeCalendar"
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};