<?php 
    header("Content-type:text/html;charset=utf-8");
    include("password.php");
    include("PHPMailer/class.phpmailer.php");
    include("PHPMailer/class.smtp.php");

    $mail = new PHPMailer();

    // $mail->SMTPDebug = 1;

    $mail->isSMTP();
    $mail->Host = 'smtp.qq.com';
    $mail->SMTPAuth = true;
    $mail->Username = '476490767@qq.com';
    $mail->Password = $password;
    $mail->From = '476490767@qq.com';
    $mail->FromName = '476490767@qq.com';    
    $mail->SMTPSecure = 'tls';
    $mail->Port = 25;

    echo get_magic_quotes_gpc() .'<br/>';

    // 获取数据
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $feedback = addslashes(trim($_POST['feedback']));
    // $feedback = trim($_POST['feedback']);
    // rtrim ltrim

    $email_array = explode('@', $email);

    if(strtolower($email_array[1]) == 'bigcustomer.com'){
        $toaddress = '2377439003@qq.com';
    }else{
        $toaddress = '476490767@qq.com';
    }

    // strstr 返回被搜索的字符串
    if(strstr($feedback,'shop')){
        $toaddress = '2377439003@qq.com';

    }else if(strstr($feedback,'delivery')){
        $toaddress = '2377439003@qq.com';

    }else{
        $toaddress = '2377439003@qq.com';
    }

    // strpos strrpos
    // 返回所在位置
    // 运行速度更加快
    // strrpos 返回最后的
    // strpos(str,need,offset)
    // 位置可能是 0 也是 false 
    // 判断最好是  === false

    echo $feedback . '<br/>';

    $toaddress = "476490767@qq.com";

    $subject = "Feedback from web site";

    $subject = ucwords($subject);
    // strtoupper
    // strtolower
    // ucfirst 第一个字符是字符则转化为答谢
    // ucwords 每个单词的第一个字符转化为大写

    $mailcontent = "Customer name: " . $name . "\n" .
                   "Customer email: " . $email . "\n" .
                   "Customer comments: \n" . $feedback . "\n";

    $fromaddress = "From: 476490767@qq.com";

    $mail->setFrom($email,'Mailer');
    $mail->addAddress($toaddress,'Mailer');

    $mail->Subject = $subject;
    $mail->Body = $mailcontent;

    // echo $mailcontent;

    echo nl2br($mailcontent);

    printf("To address %s <br/>",$toaddress);

    $total = 100;
    printf("Total is %.2f",$total);

    // if($mail->send()){
    //     echo "发送成功";
    // }else{
    //     echo "发送失败";
    //     // echo 'Mailer Error:' . $mail->ErrorInfo;
    // }

    // 格式化 因为有些字符引起数据库问题
    // 引号 反斜杠 NULL字符
    //  \"  \' \\
    // addslashes() 格式化函数
    // stripslashes() 反格式化

    $implode = array(1,2,3,4);
    $implode = implode('@',$implode);
    echo '<br/>' . $implode . '<br/>';

    $test = 'Your customer service is excellent';
    $test = substr($test,1);
    // substr(str,start,length);
    echo "$test" . '<br/>';

    $test = substr($test, -8);
    echo "$test" . '<br/>';

    $test = substr($test, 0,3);
    echo "$test" . '<br/>';

    // strcmp(str1,str2) 相等返回0 str1大返回1  str1小返回-1
    // strcasecmp() 除了不区分大小写 其他一样
    // strnatcmp() 按照人们习惯 比如 strcmp会认为 2大于12,而它不是
    // strnatcasecmp()

    // strlen() 计算长度

    $test = "哈哈哈123哈哈嘿嘿哈哈哈哈哈我";
    $test_array = array('哈','嘿','我');

    $test = substr_replace($test_array,"%!@",$test);
    print_r($test);
?>
