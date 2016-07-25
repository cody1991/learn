<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php 
    // [[:alnum:]] 文字数字字符
    // [[:alpha:]] 字符字符
    // [[:lower:]] 小写字母
    // [[:upper:]] 大写字母
    // [[:xdigit:]] 十六进制
    // [[:punct:]] 标点符号
    // [[:blank:]] 制表符或者空格
    // [[:space:]] 空白字符
    // [[:cntrl:]] 控制符
    // [[:print:]] 所有可以打印的字符
    // [[:graph:]] 除了空格以外所有可以打印的

    // * 重复0或者更多次
    // + 重复1或者更多次

    // (very )* good  =>    good    very good     very very good

    // (very ){1,3} => very     very very   very very very  
    // (very){3} 三次
    // (very){3,} 三次以上

    // ^bob 开始处匹配 bob
    // com$ 末尾是 com
    // ^[a-z]$ 匹配a-z一个字符串

    // com|edu|net

    // 匹配特殊字符 . { $ \ 加 \
    //  \\\$          \\\\
    // PHP把他们解析成 \$ \\
    // 正则表达式把他们解析成 $ \



    // shop | customer service | retail

    // ^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$
    // 在字符串开头或者末尾处使用点好，是去特殊通配符的意义

    // ereg()
    // eregi()

    $email = '476490767qq.com';

    if(!preg_match("/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/",$email)){
        echo '<p>No valid email</p>';
        // exit;
    }


    $toaddress = 'feedback@example.com';

    $feedback = "bigcustomer.com";

    if(preg_match("/shop|customer service|retail/",$feedback)){
        $toaddress = "retail@example.com";
    }elseif(preg_match("/deliver|fulfill/",$feedback)){
        $toaddress = "fulfillment@example.com";
    }elseif(preg_match("/bill|account/",$feedback)){
        $toaddress = "accounts@example.com";
    }

    if(preg_match("/bigcustomer\.com/",$feedback)){
        $toaddress = "bob@example.com";
    }

    echo "$toaddress";

    $arr = preg_split("/\.|@/",$toaddress);
    // print_r($arr);
    while(list($key,$value) = each($arr)){
        echo "<br/> " . $key . ' ' . $value;
    }

    ?>
</body>
</html>
