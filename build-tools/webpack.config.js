var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var DotenvPlugin = require('webpack-dotenv-plugin')

module.exports = {
    devtool: 'eval',
    entry: {
        index: [
            // Enable automatic refresh https://webpack.github.io/docs/webpack-dev-server.html#automatic-refresh
            'webpack-dev-server/client?http://localhost:3000',
            // Enable Hot Module Replacement
            'webpack/hot/only-dev-server',
            // Main file : entry point of application
            './src/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, '..', 'dist', 'static'),
        filename: 'assets/app.js',
        publicPath: '/static'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('../dist/style.css'),
        new DotenvPlugin({
            sample: './.env.default',
            path: './.env'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.html$/,
                loaders: ['file?name=[name].[ext]']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,
                include: path.join(__dirname, '..', 'src')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=200000'
            }]
    },
    resolve: {
        extensions: ['', '.react.js', '.js', '.jsx'],
        modulesDirectories: ['src', 'node_modules', 'styles']
    }
}
