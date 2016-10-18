/* global __dirname */
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = exports = require("./base.config.js");

exports.entry.app = ['./demo/main.ts'];

exports.plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './demo/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin(
        /* chunkName= */'vendor', /* filename= */'bundles/vendor.bundle.js'
    )
];