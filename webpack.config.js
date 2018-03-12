var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var config = {
  context: __dirname + '/src', // `__dirname` is root of project and `src` is source
  entry: {
    app: './index.js',
  },
  output: {
    path:  path.join(__dirname, 'dist'), // `dist` is the destination
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {   test: /\.html$/,
          use: 'html-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader','eslint-loader']
      },
      { loader: 'css-loader',
        exclude: /node_modules/,
        options: { minimize: true },
        test: /\.css$/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'public/index.html'
    }),
  ]
};

module.exports = config;
