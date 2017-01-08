<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
  body{
    text-align: center;
    }
  </style>
</head>
<body>
<?php 
  function foo(){
    return 5;
  }

  $c = foo();
  echo $c;

  function double($num){
    return $num*2;
  }

  $b = $a = 5;
  $c = $a++;

  $e = $d = ++$b;

  $f = double($d++);
  $g = double(++$e);

  $h = $g += 10
?>  
</body>
</html>

