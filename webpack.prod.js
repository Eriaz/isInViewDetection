const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [
            new CleanWebpackPlugin(),
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
});