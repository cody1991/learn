<?php
  require 'vendor/autoload.php';

  $whoops = new \Whoops\Run;

  $whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);

  $whoops->register();
  // 如果发生错误和捕获异常，就能看到它的诊断页面

  $a = 1;

  echo $a;
