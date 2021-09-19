const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
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
                    test: /\.jsx$/,
                    exclude: /(node_modules)/,
                    use: ['babel-loader'],
                }
            ]
    },
    resolve: {
        extensions: [
            '.jsx',
            '.js',
        ]
    } 
}