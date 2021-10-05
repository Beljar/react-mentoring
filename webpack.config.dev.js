const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: [
            '.jsx',
            '.tsx',
            '.js',
            '.ts',
            '.json',
            '.scss',
        ],
        alias: {
            src: path.resolve(__dirname, 'src'),
        }
    },
    devtool: 'source-map',
    devServer: {
        compress: true,
        port: 3000,
        open: true,        
        static: {
            directory:path.resolve(__dirname, './src/img'),
            publicPath:'/src/img'
        },
    },    
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'./public/index.html'),
            filename: 'index.html',
        })
    ],
    module:{
        rules: [
                {
                    test: /\.jsx?$/i,
                    exclude: /(node_modules)/,
                    use: ['babel-loader'],
                },
                {
                    test:/\.tsx?$/i,
                    use: ['babel-loader', 'ts-loader'],
                },
                {
                    test:/\.(gif|png|jpe?g|svg|ttf)$/i,
                    dependency: { not: ['url'] },
                    use: [
                        {
                          loader: 'file-loader',
                          options: {
                              name: '[name].[ext]',
                              publicPath: '/'
                          }
                        },
                      ],
                      type: 'javascript/auto',
                },
                {
                    test:/\.(gif|png|jpe?g|svg|ttf)$/i,
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
                    test:/\.scss$/i,
                    use: [
                        {loader: 'style-loader'},
                        {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]_[local]_[hash:base64:5]',
                                exportLocalsConvention: 'camelCase',
                            }
                        }
                    },
                        {loader: 'sass-loader'},
                    ]
                },

            ]
    },

}