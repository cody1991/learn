# 配置

几年前，一般安装 `Apache Web` 服务器和 `Apache mod_php` 模块，`Apache Web` 服务器为每个 `HTTP` 请求派生一个专用的子进程。`Apache mod_pup` 模块会为派生的每个子进程中嵌入专用的 `PHP` 解析器，即使进程只是伺候静态资源，比如 `JavaScript` 、图像和样式表，也会嵌入 `PHP` 解释器。这样消耗很大，浪费系统资源。如果使用 `Apache` 的 `PHP` 开发者原来越少，有了更高效的解决方案

如今我们使用 [nginx](http://nginx.org/) `Web` 服务器，这个服务器位于一系列的 `PHP-FPM` 进程之前，会把 `PHP` 请求转发给这些进程处理。
