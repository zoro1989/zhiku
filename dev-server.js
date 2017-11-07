/**
 * Created by Administrator on 2017/11/2.
 */
var config              = require("./webpack.config.js");
var WebpackDevServer    = require('webpack-dev-server');
var webpack             = require('webpack');

config.entry.common.unshift('webpack-dev-server/client?http://localhost:3333/');
var compiler = webpack(config);

var server = new WebpackDevServer(compiler);
server.listen(3333);