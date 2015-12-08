var path = require('path'),
    htmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

// htmlWebpackPlugin 自动快速的帮我们生成HTML

// 文件路径
var ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build'),
    TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
    // 项目文件夹，可以直接用文件夹名称，默认找index.js文件，也可以自己确定文件名
    entry: {
        app: path.resolve(APP_PATH, 'index.js'),
        mobile: path.resolve(APP_PATH, 'mobile.js'),
        vendors: ['jquery', 'moment']
    },
    // 输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    // 添加我们的插件 自动生成一个html文件
    plugins: [
        new htmlWebpackPlugin({
            title: 'Hello World app',
            templates: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            chunks: ['app', 'vendors'],
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: 'Hello Mobile app',
            templates: path.resolve(TEM_PATH, 'mobile.html'),
            filename: 'mobile.html',
            chunks: ['mobile', 'vendors'],
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    module: {
        // 看loaders的书写方式，test里面包含一个正则，包含需要匹配的文件，loaders是一个数组，包含要处理这些程序的loaders，这里我们用了css和style，注意loaders的处理顺序是从右到左的，这里就是先运行css-loader然后是style-loader.
        loaders: [{
            test: /\.less$/,
            loaders: ['style', 'css', 'less'],
            include: APP_PATH
        }, {
            // 注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片。
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }],
        preLoaders: [{
            test: /\.js$/,
            include: APP_PATH,
            loader: 'jshint-loader'
        }]
    },
    devtool: 'eval-source-map'
};


// webpack使用loader的方式来处理各种各样的资源，比如说样式文件，我们需要两种loader，css-loader 和 style－loader，css-loader会遍历css文件，找到所有的url(...)并且处理。style-loader会把所有的样式插入到你页面的一个style tag中
