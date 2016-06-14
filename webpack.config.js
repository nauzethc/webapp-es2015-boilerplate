var path              = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin       = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TARGET            = process.env.npm_lifecycle_event;


if (TARGET === 'start' || !TARGET) {
  module.exports = {
    devtool: 'eval-source-map',
    devServer: {
      hot: true,
      inline: true
    },
    resolve: {
      extensions: ['', '.js', '.css']
    },
    entry: path.resolve('app'),
    output: {
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /.js$/,
        loader: 'babel',
        include: path.resolve('app'),
        query: {
          presets: ['es2015']
        }
      }, {
        test: /.css$/,
        loaders: ['style', 'css'],
        include: path.resolve('app')
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'WebApp',
        inject: 'body',
        template: path.resolve('app/templates/index.html')
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({ 'DEBUG': true })
    ]
  };

} else {
  module.exports = {
    devtool: 'cheap-module-eval-source-map',
    resolve: {
      extensions: ['', '.js', '.css']
    },
    entry: path.resolve('app'),
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test: /.js$/,
        loader: 'babel',
        include: path.resolve('app'),
        query: {
          presets: ['es2015']
        }
      }, {
        test: /.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        include: path.resolve('app')
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'WebApp',
        inject: 'body',
        template: path.resolve('app/templates/index.html')
      }),
      new CleanPlugin(['dist']),
      new ExtractTextPlugin('styles.css?[chunkhash]'),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') }}),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }})
    ]
  };
}
