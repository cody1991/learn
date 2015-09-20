var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

module.exports = {
    entry: {
        output: './entry.js',
        output2: './entry-2.js'
    },
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=8192'
        }]
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }), devFlagPlugin
    ]
}

// command
// webpack
// webpack --progress --colors
// webpack --watch
// webpack-dev-server

// site : http://localhost:8080/webpack-dev-server/bundle

// lsof -i:8080
// kill -9 port
