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

    $name = $_POST['name'];
    $email = $_POST['email'];
    $feedback = $_POST['feedback'];

    $toaddress = "476490767@qq.com";

    $subject = "Feedback from web site";

    $mailcontent = "Customer name: " . $name . "\n" .
                   "Customer email: " . $email . "\n" .
                   "Customer comments: \n" . $feedback . "\n";

    $fromaddress = "From: 476490767@qq.com";

    $mail->setFrom($email,'Mailer');
    $mail->addAddress($toaddress,'Mailer');

    $mail->Subject = $subject;
    $mail->Body = $mailcontent;

    if($mail->send()){
        echo "发送成功";
    }else{
        echo "发送失败";
        // echo 'Mailer Error:' . $mail->ErrorInfo;
    }

?>
