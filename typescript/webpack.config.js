const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

var clientConfig = (function webpackConfig() {
    const publicPath = 'dist/';

    var config = Object.assign({});
    config.entry = './src/ts/app.ts';
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
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    overrideBrowserslist:  ['last 2 versions']
                                })
                            ],
                            sourceMap: true
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

    config.resolve = {
        extensions: [ '.tsx', '.ts', '.js' ],
    };

    return config;
});

module.exports = clientConfig;