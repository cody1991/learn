'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Webpack 基本做了下面这些事情：

// 从 context 对应的文件夹开始…

// …寻找 entry 里所有的文件名…

// …然后读取它们的内容。在解析代码时，每一个通过 import（ES6） 或 require()（Node） 引入的依赖都会被打包到最终的构建结果当中。它会接着搜索那些依赖，以及那些依赖的依赖，直到“依赖树”的叶子节点 — 只打包它所需要的依赖，没有其他的东西。

// 接着，Webpack 将所有东西打包到 output.path 对应的文件夹里，使用 output.filename 对应的命名模板来命名（[name] 被 entry 里的对象键值所替代）

// webpack -p  p 标记表示“生产（production）”模式并且会压缩或丑化（uglify/minify）输出。

module.exports = {
	context: __dirname + '/src',
	entry: {
		app: ['./app.js', './home.js'],
		footer: ['./footer.js']
	},
	// 注意 script 标签中的 /assets 对应的是 output.publicPath 的值 - 可以随便填成你想要的命名（如果需要一个 CDN，这就很有用了）。

	output: {
		path: __dirname + '/dist/assets',
		filename: "[name].bundle.js",
		publicPath: '/assets'
	},
	// 如果你正在将应用拆解，打包成多个 output 的话（如果应用的某部分有大量不需要提前加载的 JS 的话，这样做会很有用），那么在这些文件里就有可能出现重复的代码，因为在解决依赖问题的时候它们是互相不干预的。幸好，Webpack 有一个内建插件 CommonsChunk 来处理这个问题：

	// 现在，在 output 的文件里，如果有任意模块加载了两次或更多（通过 minChunks 设置该值），它就会被打包进一个叫 commons.js 的文件里，后面你就可以在客户端缓存这个文件了。当然，这肯定会造成一次额外的请求，但是却避免了客户端多次下载相同库的问题。所以在很多场景下，这都是提升速度的举措。
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'commons',
			filename: 'commons.js',
			minChunks: 2
		}),
		new ExtractTextPlugin({
			filename: "[name].bundle.css",
			allChunks: true,
		}),
	],
	// 当你更改 JavaScript 代码的时候，Webpack 就会实时更新页面而无需手动刷新浏览器。但是，任何对 webpack.config.js 的更改都需要重启服务器才可以生效。
	devServer: {
		contentBase: __dirname + "/src"
	},
	// npm install --save-dev babel-loader babel-core babel-preset-es2015
	module: {
		rules: [{
			test: /\.js/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}]
		}, {
			test: /\.css$/,
			// 这些 loader 会以数组逆序运行。这意味着 css-loader 会在 style-loader 之前运行。
			// use: [
			// 	'style-loader',
			// 	// 'css-loader'
			// 	{
			// 		loader: 'css-loader',
			// 		options: {
			// 			modules: true
			// 		}
			// 	}
			// ]
			loader: ExtractTextPlugin.extract({
				loader: 'css-loader?importLoaders=1',
			})
		}, {
			test: /\.less$/,
			use: [
				'style-loader', 'css-loader', 'less-loader'
			]
		}]
	},
	// resolve: {
	// 	modules: [path.resolve(__dirname, 'src'), 'node_modules']
	// }
}

// output.library 不懂怎么用，但是确实window里面有个 window.~ 的