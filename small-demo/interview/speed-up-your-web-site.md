* content
    * 减少http请求，合并文件，css精灵，liline image
    * 减少dns查询：dns查询完成之前浏览器不能从主机下载任何文件。方法：DNS缓存，把资源分布到恰当量的主机名，平衡并行下载和dns查询
    * 避免重定向：多余的中间访问
    * 使ajax可缓存
    * 非必须组件延迟加载
    * 未来所需组件预加载
    * 减少dom元素数量
    * 将资源放在不同域名下，浏览器同事从一个域下载资源的数目有限，增加域可以提高并行下载量
    * 减少iframe数量
    * 不要404

* server
    * 使用cdn
    * 添加expires或者cache-control响应头
    * 对组件使用gzip压缩
    * 配置Etag
    * flish buffer early
    * ajax使用get进行秋秋
    * 避免空src的img标签

* cookie
    * 减小cookie大小
    * 引入资源的域名不要包含cookie
    
* css方面
    * 把样式表放在页面顶部
    * 不使用css表达式
    * 不使用@import
    * 不使用ie的filter

* js方面
    * 标本放在页面底部
    * 将js和css从外部引入

