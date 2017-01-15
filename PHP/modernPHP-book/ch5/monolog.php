<?php
  
  require('settings.php');
  require('vendor/autoload.php');

  use Monolog\Logger;
  use Monolog\Handler\StreamHandler;
  use Monolog\Handler\SwiftMailerHandler;

  $log = new Logger('cody');
  $log->pushHandler(new StreamHandler('cody.log',Logger::WARNING));

  // $log->warning('haha');

  // 添加 swiftMailer 处理程序，来处理重要的错误

  $transport = \Swift_SmtpTransport::newInstance('smtp.qq.com',465,'ssl')
      ->setUsername('476490767@qq.com')
      ->setPassword($settings['shouquanma']);

  $mailer = \Swift_Mailer::newInstance($transport);
  $message = \Swift_Message::newInstance()
      ->setSubject('Website error!')
      ->setFrom(array('476490767@qq.com'=>'Cody'))
      ->setTo(array('476490767@qq.com'));
  $log->pushHandler(new SwiftMailerHandler($mailer,$message,Logger::CRITICAL));

  $log->critical('The server is on fire!');
