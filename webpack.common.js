const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        app: [
            './src/js/app.js',
            './src/scss/app.scss'
        ]      
    },
    output: {
        filename: 'js/app.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
						loader: "css-loader"
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './img/',
                            publicPath: '../img/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './fonts/',
                            publicPath: '../fonts/'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'utils': path.resolve(__dirname, './src/js/utils.js')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            gsap: "gsap",
            utils: "utils"
        }),
        new MiniCssExtractPlugin({
			filename: "css/style.css",
			chunkFilename: "[id].style.css"
        }),
        new WebpackNotifierPlugin({
            title: 'MKX',
            contentImage: path.join(__dirname, 'src/img/notifier-logo.png'),
            alwaysNotify: true
        }),
        new ManifestPlugin({
            fileName: 'manifest.json'
        })
    ]
}

// Then use it as const webpackVariables = require('webpackVariables');