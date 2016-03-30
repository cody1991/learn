[学习地址](https://fakefish.github.io/react-webpack-cookbook/index.html)

    {
      "scripts": {
        "build": "webpack",
        "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
      }
    }

* webpack-dev-server - Starts a web service on localhost:8080
* --devtool eval - Creates source urls for your code. Making you able to pinpoint by filename and line number where any errors are thrown
* --progress - Will show progress of bundling your application
* --colors - Yay, colors in the terminal!
* --content-base build - Points to the output directory configured

---

* webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器
* --devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
* --progress - 显示合并代码进度
* --colors - Yay，命令行中显示颜色！
* --content-base build - 指向设置的输出目录