<?php
namespace Animals;

class MyClass{
  // 指定了可见性静态属性
  public static $num  = 0;
  // 指定了可见性的方法
  public function __construct(){
    static::$num;
  }
}

if (1 === 1) {
  do {

  } while (2 === 3);
}

interface LoggerInterface
{
  public function emergency($message, array $context = array());
  public function alert($message, array $context = array());
  public function critical($message, array $context = array());
  public function error($message, array $context = array());
  public function warning($message, array $context = array());
  public function notice($message, array $context = array());
  public function info($message, array $context = array());
  public function debug($message, array $context = array());
  public function log($level, $message, array $context = array());
}

require 'vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// 准备日志记录器

$log = new Logger('myApp');

$log->pushHandler(new StreamHandler('logs/development.log',Logger::DEBUG));
$log->pushHandler(new StreamHandler('logs/production.log',Logger::WARNING));

$log->debug('This is a debug message');
$log->warning('This is a warning message');
$log->error('This is a error message');
