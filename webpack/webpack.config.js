var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: {
        index: [
            'webpack-dev-server/client?http://localhost:3000', // Enable automatic refresh https://webpack.github.io/docs/webpack-dev-server.html#automatic-refresh
            'webpack/hot/only-dev-server', // Enable Hot Module Replacement
            './src/index.js' // Main file : entry point of application
        ]
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name].js',
        publicPath: '/static/build/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('../dist/style.css')
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include: path.join(__dirname, '..', 'src')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=200000'
        }]
    },
    resolve: {
        extensions: ['', '.react.js', '.js', '.jsx'],
        modulesDirectories: ['src', 'node_modules', 'styles']
    },
};
