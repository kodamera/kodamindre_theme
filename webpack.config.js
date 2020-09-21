const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/css/index.css',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              esModule: false
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images'
        },
      ],
    }),
    new ExtractTextPlugin('index.css', {
      disable: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
      patterns: [
        { from: 'src/index.html', to: 'dist/' },
      ],
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
}
