var path = require('path');

module.exports = {
    entry: './src/main',

    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].js',
        publicPath: './build/'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.less$/,
            loader: 'style!css!postcss!less'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },

    vue: {
        loaders: {
            css: 'style!css!postcss!less'
        }
    },


    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },

    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: '#source-map',
    watch: true
};
