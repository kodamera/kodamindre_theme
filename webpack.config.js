const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

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
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      files: [
        "./dist/**/*.css",
        "./templates/**/*.html.twig"
      ],
      proxy: {
        target: "http://km-tailwind-d8-starterkit.test/"
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images'
        },
      ],
    }),
    new ExtractTextPlugin('css/index.css', {
      disable: process.env.NODE_ENV === 'development',
    }),
  ],
}
