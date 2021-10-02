const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
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
        ]
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
                {
                    test:/\.(gif|png|jpe?g|svg)$/i,
                    use: [
                            {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[ext]'
                                },
                        },
                    ],
                }
            ]
    },

}