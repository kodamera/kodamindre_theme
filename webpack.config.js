const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env',
                  require('tailwindcss'),
                  require('autoprefixer'),
                  {
                    // Options
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
