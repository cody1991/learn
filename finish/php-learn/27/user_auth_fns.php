<?php
require_once 'db_fns.php';
include 'password.php';

$getPassword = $email_password;

require_once "PHPMailer/class.phpmailer.php";
require_once "PHPMailer/class.smtp.php";

function register($username, $email, $password)
{
    $conn = db_connect();

    $result = $conn->query("select * from user where username='" . $username . "'");
    if (!$result) {
        throw new Exception("Could not execute query", 1);
    }
    if ($result->num_rows > 0) {
        throw new Exception("That username is taken -go back and choose another one.", 1);
    }
    $result = $conn->query("insert into user values ('" . $username . "',sha1('" . $password . "'),'" . $email . "')");

    if (!$result) {
        throw new Exception("Could not register you in database - please try again later.", 1);
    }

    return true;
}

function login($username, $password)
{
    $conn = db_connect();

    $result = $conn->query("select * from user where username='" . $username . "'and passwd = sha1('" . $password . "')");

    if (!$result) {
        throw new Exception("Could not log you in.", 1);
    }

    if ($result->num_rows > 0) {
        return true;
    } else {
        throw new Exception("Could not log you in", 1);
    }
}

function check_valid_user()
{
    if (isset($_SESSION['valid_user'])) {
        echo "Logged in as " . $_SESSION['valid_user'] . ".<br/>";
    } else {
        do_html_heading('Problem:');
        echo 'You are not logged in.<br/>';
        do_html_url('login.php', 'Login');
        do_html_footer();
        exit();
    }
}

function change_password($username, $old_password, $new_password)
{
    login($username, $old_password);
    $conn   = db_connect();
    $result = $conn->query("update user
                            set passwd = sha('" . $new_password . "')
                            where username = '" . $username . "'");

    if (!$result) {
        throw new Exception("Password could not be changed", 1);
    } else {
        return true;
    }
}

function reset_password($username)
{
    $new_password = rand(100000, 9999999999999);

    $conn = db_connect();

    // echo $new_password;

    $result = $conn->query("update user set passwd = sha1('" . $new_password . "') where username = '" . $username . "'");

    if (!$result) {
        throw new Exception("Could not change password.", 1);
    } else {
        return $new_password;
    }
}

function notify_password($username, $password)
{
    global $getPassword;
    $conn   = db_connect();
    $result = $conn->query("select email from user where username='" . $username . "'");

    if (!$result) {
        throw new Exception("Could not find email address.", 1);
    } else if ($result->num_rows == 0) {
        throw new Exception("Could not find email address.", 1);

    } else {
        // 发邮件
        $row   = $result->fetch_object();
        $email = $row->email;

        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host       = 'smtp.qq.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = '476490767@qq.com';
        $mail->Password   = $getPassword;
        $mail->From       = '476490767@qq.com';
        $mail->FromName   = '476490767@qq.com';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 25;

        $subject = "PHPBookmark login information";
        $mesg    = "Your PHPBookmark password has been changed to " . $password . "\r\n"
            . "Please change it next time you log in.\r\n";
        $fromaddress = "From: 476490767@qq.com";

        $mail->Subject = $subject;
        $mail->Body    = $mesg;
        $mail->addAddress($email, 'Mailer');
        $mail->setFrom($fromaddress);

        if ($mail->send()) {
            return true;
        } else {
            throw new Exception("Could not send email", 1);

        }
    }
}
