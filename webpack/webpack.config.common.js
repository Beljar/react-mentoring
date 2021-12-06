const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    modules: [path.resolve(__dirname, '..', 'node_modules')],
    extensions: ['.jsx', '.tsx', '.js', '.ts', '.json'],
    alias: {
      src: path.resolve(__dirname, '..', 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/i,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|ttf)$/i,
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: '/',
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.(gif|png|jpe?g|ttf)$/i,
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
