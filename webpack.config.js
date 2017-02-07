'use strict';
var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    plugins: process.env.NODE_ENV === 'production' ? [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ] : [],
    exclude: /(node_modules|bower_components)/,
    noParse: [
      '/node_modules\/aframe\/dist\/aframe.js/'
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' } //query on single line
    ]
  }
}
