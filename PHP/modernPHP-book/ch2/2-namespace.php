<?php 
  namespace Cody\App;
  class Foo {
    public function doSomething(){
      $exception = new \Exception();
      echo 'success';
      echo $exception;
    }
  }

  // 最好不要这样，违背一个文件定义一个类
  // namespace Bar {

  // }
?>
