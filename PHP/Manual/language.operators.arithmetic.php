取模运算符 % 的结果和被除数的符号（正负号）相同。即 $a % $b 的结果和 $a 的符号相同。例如：

<?php

  echo (5 % 3)."\n";           // prints 2
  echo (5 % -3)."\n";          // prints 2
  echo (-5 % 3)."\n";          // prints -2
  echo (-5 % -3)."\n";         // prints -2

?>
