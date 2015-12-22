var webpack = require('webpack'),
    path = require('path'),
    htmlwebpackPlugin = require('html-webpack-plugin');

// Webpack 中涉及路径配置最好使用绝对路径，建议通过 path.resolve(__dirname, "app/folder") 或 path.join(__dirname, "app", "folder") 的方式来配置，以兼容 Windows 环境。

var ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader?compress'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader!compress'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }]
    },
    plugins: [
        // 这个插件的作用是给输出的文件头部添加注释信息 
        new webpack.BannerPlugin('This file is created by cody 2015.12.20'),
        new htmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    }
}
