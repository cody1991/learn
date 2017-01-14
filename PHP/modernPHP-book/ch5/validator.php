<?php
  
  echo htmlentities('<p><script>alert("You won the game");<script></p>',ENT_QUOTES,'UTF-8');

  echo '<br/>';

  // 过滤电子邮件
  $email = 'ñ476490767@qq.com';
  $emailSafe = filter_var($email,FILTER_SANITIZE_EMAIL);
  echo $emailSafe;

  echo '<br/>';

  // 过滤用户资料中的外国字符
  $string = "\nIñtërnâtiônàlizætiøn\t";
  $safeString = filter_var(
    $string,
    FILTER_SANITIZE_STRING,
    FILTER_FLAG_STRIP_LOW|FILTER_FLAG_ENCODE_HIGH
  );

  echo $safeString;

  echo '<br/>';

  $isEmail = filter_var($email, FILTER_VALIDATE_EMAIL);

  if($isEmail !== false) {
    echo 'Success';
  } else {
    echo 'Fail';
  }
