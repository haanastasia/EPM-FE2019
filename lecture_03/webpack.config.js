const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var clientConfig = (function webpackConfig() {
    const publicPath = 'dist/';

    var config = Object.assign({});
    config.entry = './src/js/app.js';
    config.output = {
        path: path.resolve(__dirname, publicPath),
        filename: 'index.js'
    };

    config.optimization = {
        minimize: true
    };

    config.module = {
        rules: [
            {
                test: /\.js$/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                loader: 'file-loader',
                options: { name: 'img/[name].[ext]' }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: { name: 'font/[name].[ext]' }
            }        
        ]
    };

    config.plugins = [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ];

    return config;
});

module.exports = clientConfig;