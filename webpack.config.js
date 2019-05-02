// entry point
// output
// loaders
// plugins
const path = require('path') // build in node package for absolute paths
const SassWebpackPlugin = require('sass-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // plugin to output index.html and insert script tag into it on the distribution folder automatically.

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader", // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
}