const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');

const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: process.env.NODE_ENV,
  name: 'server',
  target: 'node',
  entry: './src/serverRender.js',
  externals: [
    nodeExternals({
      allowlist: [/\.css$/],
    }),
  ],
  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                exportOnlyLocals: true,
                localIdentName: '[name]_[local]_[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
});
