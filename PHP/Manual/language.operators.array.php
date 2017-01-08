<?php  

// $a + $b 联合  $a 和 $b 的联合。
// $a == $b  相等  如果 $a 和 $b 具有相同的键／值对则为 TRUE。
// $a === $b 全等  如果 $a 和 $b 具有相同的键／值对并且顺序和类型都相同则为 TRUE。
// $a != $b  不等  如果 $a 不等于 $b 则为 TRUE。
// $a <> $b  不等  如果 $a 不等于 $b 则为 TRUE。
// $a !== $b 不全等 如果 $a 不全等于 $b 则为 TRUE。
  $a = array("a"=>"apple","b"=>"banana");
  $b = array("a"=>"pear","b"=>"strawberry","c"=>"cherry");

  $c = $a+$b;

  var_dump($c);

  $c = $b+$a;

  echo "<br/>";

  var_dump($c);

  $a += $b;

  echo "<br/>";


  var_dump($a);

  $a = array("apple","banana");
  $b = array(1=>"banana","0"=>"apple");
  echo "<br/>";

  var_dump($a==$b);
  echo "<br/>";
  
  var_dump($a===$b);

  echo "<br/>";

  var_dump($a);

  echo "<br/>";

  var_dump($b);


?>
