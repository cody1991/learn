<?php 
// $a & $b and 1的设为1
// $a | $b or 任何为1设为1
// $a ^ $b xor 一个是1另外一个0的设为1
// ~$a not 取反
// $a<<$b 左移，每次乘以2
// $a>>$b 右移，每次除以2

// E_ALL & ~E_NOTICE
// E_ALL ^ E_NOTICE
// E_ERROR | E_RECOVERABLE_ERROR

$format = '(%1$2d = %1$04b) = (%2$2d = %2$04b)'
  . ' %3$s (%4$2d = %4$04b)'
  . "\n";
echo "<pre>";
echo <<<EOH
 ---------     ---------  -- ---------
 result        value      op test
 ---------     ---------  -- ---------
EOH;

$values = array(0,1,2,4,8);
$test = 1 + 4;

echo "\n Bitwise AND \n";
foreach($values as $value){
  $result = $value & $test;
  printf($format,$result,$value,'&',$test);
}

echo "\n Bitwise Inclusive OR \n";
foreach ($values as $value) {
    $result = $value | $test;
    printf($format, $result, $value, '|', $test);
}

echo "\n Bitwise Exclusive OR (XOR) \n";
foreach ($values as $value) {
    $result = $value ^ $test;
    printf($format, $result, $value, '^', $test);
}
echo "\n";
echo 12 ^ 9; // Outputs '5'

echo "12" ^ "9"; // Outputs the Backspace character (ascii 8)
                 // ('1' (ascii 49)) ^ ('9' (ascii 57)) = #8

echo "hallo" ^ "hello"; // Outputs the ascii values #0 #4 #0 #0 #0
                        // 'a' ^ 'e' = #4

echo 2 ^ "3"; // Outputs 1
              // 2 ^ ((int)"3") == 1

echo "2" ^ 3; // Outputs 1
              // ((int)"2") ^ 3 == 1
echo "\n";


echo "</pre>";

echo "<hr/>";
echo "<pre>";
$val = 4;
$places = 1;
$res = $val >> $places;
custom_print($res,$val,'>>',$places);

$val = 4;
$places = 2;
$res = $val >> $places;
custom_print($res, $val, '>>', $places);

$val = 4;
$places = 3;
$res = $val >> $places;
custom_print($res, $val, '>>', $places);

$val = -4;
$places = 1;
$res = $val >> $places;
custom_print($res, $val, '>>', $places);

$val = -4;
$places = 2;
$res = $val >> $places;
custom_print($res, $val, '>>', $places);

$val = -4;
$places = 3;
$res = $val >> $places;
custom_print($res, $val, '>>', $places);

$val = 4;
$places = 1;
$res = $val << $places;
custom_print($res, $val, '<<', $places);

$val = 4;
$places = (PHP_INT_SIZE * 8) - 4;
$res = $val << $places;
custom_print($res, $val, '<<', $places);

$val = 4;
$places = (PHP_INT_SIZE * 8) - 3;
$res = $val << $places;
custom_print($res, $val, '<<', $places);

$val = 4;
$places = (PHP_INT_SIZE * 8) - 2;
$res = $val << $places;
custom_print($res, $val, '<<', $places);


function custom_print($res,$val,$operator,$places,$note=''){
  // 二进制的表示方法
  $format = '%0' . (PHP_INT_SIZE * 8) . "b\n";
  printf("Expression: %d = %d %s %d\n",$res,$val,$operator,$places);

  echo " Decimal:\n";
  printf("   val=%d\n",$val);
  printf("   res=%d\n",$res);

  echo " Binary:\n";
  printf('   val='.$format,$val);
  printf('   res='.$format,$res);

  if($note){
    echo " NOTE: $note\n";
  }

  echo "<hr>";
}

echo "</pre>";


?>
