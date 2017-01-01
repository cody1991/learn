// 使用htmlwebpackplugin 把 bundle 好的 script 插入到 body 
// ${__dirname} 为 es6 语法对应到 __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    // 档案起始点从 entry 进入，因为是阵列所以也可以是多个档案
    entry: [
        './app/index.js'
    ],
    // output 是放入产生出来的结果的相关参数
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js'
    },
    // loaders 则是放欲使用的 loaders，在这边是使用 babel-loader 将所有 .js（这边用到正则式）相关档案（排除了 npm 安装的套件位置 node_modules）转译成浏览器可以阅读的 JavaScript。
    // preset 则是使用的 babel 转译规则，这边使用 react、es2015。
    // 若是已经单独使用 .babelrc 作为 presets 设定的话，则可以省略 query
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    // devServer 则是 webpack-dev-server 设定
    devServer: {
        inline: true,
        port: 8000
    },
    plugins: [HtmlWebpackPluginConfig]
}
