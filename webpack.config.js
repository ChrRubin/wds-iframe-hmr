const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';

const config = {
  entry: {
    background: path.join(__dirname, 'src', 'background.js'),
    'content-script': path.join(__dirname, 'src', 'content-script.js'),
    'page-script': path.join(__dirname, 'src', 'page-script.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    host: 'localhost',
    port: 3010,
    disableHostCheck: true,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, '../dist'),
    writeToDisk: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/manifest.json'
        },
        {
          from: 'src/page.html'
        }
      ]
    })
  ],
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
