const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,

  devtool: 'cheap-eval-source-map',

  entry: ['react-hot-loader/patch', './example/src/index.js'],

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 3001,
    hot: true,
    overlay: true,
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    // publicPath: '/public/',
    contentBase: path.join(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'example/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}