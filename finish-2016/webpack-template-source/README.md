# Comments

* Webpack 中涉及路径配置最好使用绝对路径，建议通过 `path.resolve(__dirname, "app/folder")` 或 `path.join(__dirname, "app", "folder")` 的方式来配置，以兼容 `Windows` 环境。

* 注意 我们修改了 `bundle.js` 用一个数组 `[name]` 来代替，他会根据 `entry` 的入口文件名称生成多个js文件，这里就是( `app.js` , `mobile.js` 和 `vendors.js` )

* `filename: '[name].[hash].js'` 可以生成带有哈希值的文件

* `webpack.BannerPlugin` 这个插件的作用是给输出的文件头部添加注释信息