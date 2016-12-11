const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/app/index.html`,
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: `{__dirname}/dist`,
		filename: 'index_bundle.js'
	},
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
	devServer: {
		inline: true,
		port: 8080
	},
	plugins: [HtmlWebpackPluginConfig]
}