var webpack = require('webpack');

// Webpack 中涉及路径配置最好使用绝对路径，建议通过 path.resolve(__dirname, "app/folder") 或 path.join(__dirname, "app", "folder") 的方式来配置，以兼容 Windows 环境。

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    plugins: [
        // 这个插件的作用是给输出的文件头部添加注释信息 
        new webpack.BannerPlugin('This file is created by cody 2015.12.20')
    ]
}
