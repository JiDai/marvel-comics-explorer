/**
 * Created by jd on 26/07/16.
 */
var config = require('./webpack.config');

module.exports = {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: true,
  proxy: {
    '/': {
      target: 'http://localhost:5000',
      secure: false
    }
  }
};
