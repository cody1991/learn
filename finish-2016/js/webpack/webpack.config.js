var webpack = require('webpack');

module.exports = {
    entry: './app.js',
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
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
    ]
}
