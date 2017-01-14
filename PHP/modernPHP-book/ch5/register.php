<?php
try {
  // 验证电子邮件地址
  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

  if(!$email){
    throw new Exception('Invalid email');
  }

  // 验证密码
  $password = filter_input(INPUT_POST,'password');

  if(!$password || mb_strlen($password) < 8) {
    throw new Exception('Password must contain 8+ characters');
  }

  // 第一个参数纯文本密码
  // 第二个 PASSWORD_DEFAULT 告诉  PHP 使用 bcrypt 哈希算法
  // 数组，指定哈希选项，
  $passwordHash = password_hash(
    $password,
    PASSWORD_DEFAULT,
    ['cost' => 12]
  );

  echo $passwordHash;
  // $2y$12$qxzRNS8tGfnfA6Xw/VqShOYnsFWd8Aqoe2CggEsDi1L9KMtpqOzT2$2y$12$qxzRNS8tGfnfA6Xw/VqShOYnsFWd8Aqoe2CggEsDi1L9KMtpqOzT2

  if($passwordHash === false) {
    throw new Exception('Password hash failed');
  }

  print_r($passwordHash);

  // 虚构代码
  // $user = new User();
  // $user->email = $email;
  // $user->password_hash = $passwordHash;
  // $user->save();

  // 重定向
  header('HTTP/1.1 302 Redirect');
  header('Location: ./login-form.php');

} catch (Exception $e) {
  header('HTTP/1.1 400 Bad request');
  echo $e->getMessage();
}
