如果想用HTTPS ，第一件事就是有个私钥和整数

私钥可以解密客户端发给服务器的数据

私钥保存在服务器一个文件里

    openssl genrsa 1024 > key.pem

还需要一个整数，可以和全世界分享，包含公钥和证书持有者信息，公钥加密从客户端发往服务端的数据

创建证书需要私钥，输入下面命令

    openssl req -x509 -new -key key.pem > key-cert.pem
