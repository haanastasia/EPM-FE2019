const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var clientConfig = (function webpackConfig() {
    var config = Object.assign({});
    config.entry = './src/js/app.js';
    config.output = {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    };
    config.module = {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader", options: { minimize: true } },
                        { loader: "sass-loader" },
                    ]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    { loader: 'file-loader?name=./font/[name].[ext]' },
                ]
            }
        ]
    };

    config.plugins = [
        new ExtractTextPlugin('style.css'),
        new UglifyJsPlugin({
            beautify: false,
            comments: false,
            compress: { warnings: true }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ];

    config.devServer = {
        contentBase: path.resolve(__dirname, './src'),
        watchContentBase: true,
        disableHostCheck: true,
        host: "0.0.0.0",
        port: 30000
    };

    return config;
});

module.exports = clientConfig;