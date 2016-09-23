    HTTP/1.1 200 OK
    Date: Tue, 08 Jul 2014 05:28:43 GMT
    Server: Apache/2
    Last-Modified: Wed, 01 Sep 2004 13:24:52 GMT
    ETag: "40d7-3e3073913b100"
    Accept-Ranges: bytes
    Content-Length: 16599
    Cache-Control: max-age=21600
    Expires: Tue, 08 Jul 2014 11:28:43 GMT
    P3P: policyref="http://www.w3.org/2001/05/P3P/p3p.xml"
    Content-Type: text/html; charset=iso-8859-1

    {"name": "qiu", "age": 25}

* 首行状态包括 http版本，状态码，状态描述，后面一个crlf
* 首行之后是若干响应头，包括：通用头部，响应头部，实用头部
* 响应头部和响应实体之间用一个crlf空行分隔
* 最后是消息实体