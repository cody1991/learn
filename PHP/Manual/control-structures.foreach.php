<?php  
// 第一种格式遍历给定的 array_expression 数组。每次循环中，当前单元的值被赋给 $value 并且数组内部的指针向前移一步（因此下一次循环中将会得到下一个单元）。

// 第二种格式做同样的事，只除了当前单元的键名也会在每次循环中被赋给变量 $key。

// 当 foreach 开始执行时，数组内部的指针会自动指向第一个单元。这意味着不需要在 foreach 循环之前调用 reset()。

$arr = array(1,2,3,4);
foreach ($arr as &$value){
  $value = $value*2;

}
unset($value);
// 数组最后一个元素的 $value 引用在 foreach 循环之后仍会保留。建议使用 unset() 来将其销毁。
var_dump($arr);

$arr = array('one','two','three');

reset($arr);

while(list(,$value)=each($arr)){
  echo "Value:$value<br>\n";
}
foreach($arr as $value){
  echo "Value:$value<br>\n";
}

reset($arr);

// while指针会往后走
// 当 foreach 开始执行时，数组内部的指针会自动指向第一个单元。
while(list($key,$value)=each($arr)){
  echo "Key:$key;Value:$value<br>\n";
}
foreach($arr as $key=>$value){
  echo "Key:$key; Value:$value<br>\n";
}
foreach($arr as $key=>$value){
  echo "Key:$key; Value:$value<br>\n";
}

$a = array(1,2,3,17);
foreach($a as $v){
  echo "Current value of \$a: $v.\n";
}

$a = array(
    "one" => 1,
    "two" => 2,
    "three" => 3,
    "seventeen" => 17
);


foreach($a as $k=>$v){
  echo "\$a[$k]=>$v.\n";
}

$array = [
    [1, 2],
    [3, 4],
];

foreach($array as list($a,$b)){
   echo "A: $a; B: $b\n";
}

?>
