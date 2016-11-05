var path = require('path');
var webpack = require('webpack');
var Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  devtool: '#cheap-module-source-map',
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
  plugins: [
    new Visualizer(),
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en)$/),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
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