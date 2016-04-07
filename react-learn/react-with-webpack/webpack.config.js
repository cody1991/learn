var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: './public/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(js)$/,
            loader: 'jsx-loader?harmony'
        }, {
            test: /\.(css)$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?size=8192'
        }]
    }
}
