var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './dev/js/client.js',
  // output: {
  // path: 'src/js',
  // filename: 'bundle.js'
  // },
  devServer: {
    inline: true,
    publicPath: '/',
    filename: 'bundle.js',
    //contentBase: '',
    port: 8087
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'react-html-attrs', 
            'transform-class-properties', 
            'transform-decorators-legacy', 
            'transform-object-rest-spread'
          ]
        }
      }
    ]
  },
  plugins: [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin()
  //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
}