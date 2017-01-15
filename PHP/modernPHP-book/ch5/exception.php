<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <pre>
<?php 
  // set_exception_handler(function(Exception $e){
  //   // 处理异常
  // })

  // set_error_handler(function($errno,$errstr,$errfile,$errline){
  //   if (!(error_reporting() & $errno)) {
  //     return;
  //   }
  //   throw new \ErrorException($errstr,$errno,0,$errfile,$errline);
  // });

  $exception = new Exception('Danger, Will Robinson!',100);

  echo $code = $exception->getCode();
  echo '<br/>';
  echo $message = $exception->getMessage();
  echo "<br/>";
  try {
    throw new Exception('Something went wrong.');    
  } catch (Exception $e) {
    echo $code = $e->getCode();
    echo '<br/>';
    echo $message = $e->getMessage();
  }
?>
  </pre>
</body>
</html>
