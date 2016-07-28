var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true
    },
    proxy: {
      '/': {
        target: 'http://localhost:5000',
        secure: false
      },
      // '/static/build/*': {
      //   target: 'http://localhost:5000',
      //   secure: false
      // }
    }
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
