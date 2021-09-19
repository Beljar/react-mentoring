const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')],
        extensions: [
            '.jsx',
            '.js',
            '.json',
        ]
    },
    devtool: 'source-map',
    devServer: {
        compress: true,
        port: 3000,
        open: true,
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
                        'css-loader',
                        'sass-loader',
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