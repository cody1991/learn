var webpack = require('webpack'),
    path = require('path'),
    htmlwebpackPlugin = require('html-webpack-plugin');

// Webpack 中涉及路径配置最好使用绝对路径，建议通过 path.resolve(__dirname, "app/folder") 或 path.join(__dirname, "app", "folder") 的方式来配置，以兼容 Windows 环境。

var ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build'),
    TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.js'),
        mobile: path.resolve(APP_PATH, 'mobile.js'),
        vendors: ['fastclick']
    },
    output: {
        path: BUILD_PATH,
        //注意 我们修改了bundle.js 用一个数组[name]来代替，他会根据entry的入口文件名称生成多个js文件，这里就是(app.js,mobile.js和vendors.js)
        filename: '[name].js'
            // filename: '[name].[hash].js'
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
            loader: 'url?limit=4000'
        }]
    },
    plugins: [
        // 这个插件的作用是给输出的文件头部添加注释信息 
        new webpack.BannerPlugin('This file is created by cody 2015.12.20'),
        new htmlwebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            chunks: ['app', 'vendors'],
            inject: 'body'
        }),
        new htmlwebpackPlugin({
            title: 'Hello Mobile app',
            template: path.resolve(TEM_PATH, 'mobile.html'),
            filename: 'mobile.html',
            chunks: ['vendors', 'mobile'],
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    externals: {
        moment: true
    }
    // devtool: 'eval-source-map'
}
