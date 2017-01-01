* 地址输入url

* 浏览器查看缓存，如果请求资源在缓存并且新鲜，跳转到转码步骤
    * 如果资源未缓存，发起新请求
    * 如果已经缓存，检查是否足够新鲜，足够新鲜直接提供给客户端，否则和服务器进行验证
    * 检查新鲜通常有两个HTTP头进行控制 Expires Cache-Control
        * http1.0提供了Expires，值为一个绝对时间表示缓存新鲜日期
        * http1.1新加了Cache-Control:max-age= 值为秒的最大新鲜时间

* 浏览器解析url获取协议，主机，端口，path

* 浏览器组装一个http(get)请求报文

* 浏览器获取主机ip地址，过程如下：
    * 浏览器缓存
    * 本机缓存
    * hosts文件
    * 路由器缓存
    * ips dns缓存
    * dns递归查询(可能存在负载均衡器导致每次ip不一样)

* 打开一个socket和目标ip地址，端口建立tcp链接，三次握手如下：
    * 客户端发起一个tcp syn=1,seq=x的包到服务器端口
    * 服务器发回syn=1 ack=x+1 seq=y的响应包
    * 客户端发送ack=y+1 seq=z

* tcp链接建立后发送http请求

* 服务器接受请求并且解析，把请求转发到服务程序，比如虚拟主机使用http host头部判断请求的服务程序

* 服务器检查http请求头是否包含缓存验证信息，如果验证缓存新鲜，返回304等对应状态码

* 处理程序读取完整请求并准备http响应，可能需要数据库查询等操作

* 服务器将响应报文通过tcp连接发送回浏览器

* 浏览器接收http响应，然后根据情况选择关闭tcp连接或保留重用，关闭tcp连接的四次握手如下：
    * 主动发送fin=1 ack=z seq=x报文
    * 被动方发送ack=x+1 seq=y
    * 被动方发送fin=1 ack=x seq=y报文
    * 主动方发送ack=y seq=x报文

* 浏览器检查响应状态码，是否1xx,3xx,4xx,5xx，这些情况和2xx处理不同

* 如果资源可缓存，进行缓存

* 对响应进行解码（比如gzip压缩）

* 根据资源类型决定如何处理（假设资源为html文档）

---

解析html文档，构建dom树，下载资源，构建cssom树，执行js脚本

* 构建dom树 
    * tokenizing 根据html规范把字符流解析为标记
    * lexing 词法分析将标记转换为对象并定义属性和规则
    * dom construction 根据html标记关系将对象组建成dom树

* 解析过程中遇到图片，央视表，js文件，启动下载

* 构建cssom树
    * tokenizing 字符流转换为标记流
    * node 根据标记创建节点
    * cssom 节点创建cssom树

* 根据dom和cssom树构建渲染树
    * 从dom树的根节点遍历所有可见节点，不可见节点包括:script,meta本身不可见的 被css隐藏的节点，比如display:none
    * 对可见对节点，找到恰当的cssom规则并应用
    * 发现可视节点的内容和计算样式

* js解析如下：
    * 浏览器创建document对象并解析html，把解析到的元素和文本节点添加到文档中，此时document.readystate为loading
    * html解析器遇到没有async和defer的script，把她们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，它们可以便利和操作script和他们之前的文档内容
    * 当解析器遇到设置了async属性的script，开始下载脚本并继续解析文档。脚本会在下载完以后尽快执行，但是解析器不会停下来等他下载。异步脚本禁止使用document.write()，他们可以访问自己script和致歉的文档元素
    * 文档解析完成，document.readystate变成interactive
    * 所有defer脚本会按照文本出现的顺序执行，延迟脚本能访问完整文档树，禁止使用document.write()
    * 浏览器在document对象上出发DOMContentLoaded事件
    * 此时文档解析完成，浏览器可能还在等待比如图片等内容加载，等内容完成家在并且所有异步脚本完成载入和执行,document.readystate变为complte，window出发load事件

* 显示页面（html解析过程会逐步显示页面）
