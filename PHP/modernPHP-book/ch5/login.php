<?php
session_start();

try {
  // 请求体中获取电子邮件地址
  $email = filter_input(INPUT_POST,'email');

  // 请求体中获取密码
  $password = filter_input(INPUT_POST,'password');

  // 虚构
  // $user = User::findByEmail($email);

  // 比较 http 请求主题提交的纯文本密码和记录用户存储的密码哈希值，如果验证失败，抛出异常
  // if(password_verify($password,$user->password_hash) === false) {
  //   throw new Exception('Invalid password');
  // }

  // 复制过来是错误，不明
  // if(password_verify($password,'$2y$12$qxzRNS8tGfnfA6Xw/VqShOYnsFWd8Aqoe2CggEsDi1L9KMtpqOzT2$2y$12$qxzRNS8tGfnfA6Xw/VqShOYnsFWd8Aqoe2CggEsDi1L9KMtpqOzT2') === false) {
  //   throw new Exception('Invalid password');
  // }

  // $currentHashAlgorithm = PASSWORD_DEFAULT;
  // $currentHashOptions = array('cost'=>15);
  // 确定用户密码哈希是否符合最新的密码算法选项，如果过时了，使用心得选项计算
  // $passwordNeedsRehash = password_needs_rehash(
  //   $user->password_hash,
  //   $currentHashAlgorithm,
  //   $currentHashOptions
  // );

  // if($passwordNeedsRehash === true) {
  //   $user->password_hash = password_hash(
  //     $password,
  //     $currentHashAlgorithm,
  //     $currentHashOptions
  //   );
  // }

  // $user->save();

  $_SESSION['user_logged_in'] = 'yes';
  $_SESSION['user_email'] = $email;

  header('HTTP/1.1 302 Redirect');
  header('Location: ./profile.php');

} catch (Exception $e){
  header('HTTP/1.1 401 Unauthorized');
  echo $e->getMessage();
}
