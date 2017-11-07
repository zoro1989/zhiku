/*
* @Author: Rosen
* @Date:   2017-05-08 15:28:19
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-30 16:50:46
*/
var webpack             = require('webpack');
var ExtractTextPlugin   = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin   = require('html-webpack-plugin');
var path                = require('path')

// 环境变量配置，dev / online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

// 获取html-webpack-plugin参数的方法 
var getHtmlConfig = function(name, title){
    return {
        template    : './' + name + '.html',
        filename    : './' + name + '.html',
        title       : title,
        inject      : true,
        hash        : true,
        chunks      : ['common', name]
    };
};
// webpack config
var config = {
    entry: {
        'common'            : [
                                './js/jquery.min.js',
                                './common/index.js',
                                './js/bootstrap.min.js',
                                // './js/google_map.js',
                                './js/jquery.countTo.js',
                                './js/jquery.easing.1.3.js',
                                './js/jquery.magnific-popup.min.js',
                                './js/jquery.stellar.min.js',
                                './js/jquery.waypoints.min.js',
                                './js/magnific-popup-options.js',
                                './js/main.js',
                                './js/modernizr-2.6.2.min.js',
                                './js/respond.min.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath : '/',
        filename: 'js/[name].js'
    },
    externals : {
        'jquery' : 'window.jQuery'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        },
        {
          test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
          use: ['url-loader?limit=100&name=resource/[name].[ext]']
        },
        {
          test: /\.string$/,
          use: ['html-loader']
        }
      ]
    },
    plugins: [
        // 独立通用模块到js/base.js
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename : 'js/base.js'
        }),
        // 把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        // html模板的处理
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
        new HtmlWebpackPlugin(getHtmlConfig('industry', '行业知识')),
        new HtmlWebpackPlugin(getHtmlConfig('professional', '专业技术')),
        new HtmlWebpackPlugin(getHtmlConfig('ebook', '电子书')),
        new HtmlWebpackPlugin(getHtmlConfig('training', '对日培训')),
        new HtmlWebpackPlugin(getHtmlConfig('contact', '联系我们'))
    ]
};

// if('dev' === WEBPACK_ENV){
//     config.entry.common.push('webpack-dev-server/client?http://localhost:8088/');
// }

module.exports = config;