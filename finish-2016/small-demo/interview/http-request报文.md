* 首行是Request-Line包括：请求方法，请求URL，协议版本，CRLF
* 之后是若干行请求头，包括general-header request 或者 entity-header，每一行都是crlf结束
* 请求头和消息实体之间有一个crlf分割
* 根据实际请求需求可能包含一个消息实体

    GET /Protocols/rfc2616/rfc2616-sec5.html HTTP/1.1
    Host: www.w3.org
    Connection: keep-alive
    Cache-Control: max-age=0
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
    User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36
    Referer: https://www.google.com.hk/
    Accept-Encoding: gzip,deflate,sdch
    Accept-Language: zh-CN,zh;q=0.8,en;q=0.6
    Cookie: authorstyle=yes
    If-None-Match: "2cc8-3e3073913b100"
    If-Modified-Since: Wed, 01 Sep 2004 13:24:52 GMT

    name=qiu&age=25