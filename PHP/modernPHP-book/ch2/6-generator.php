<?php 
  // 生成器就是php函数，在函数中一次或多次使用yield关键字
  // 生成器不返回值，只产出值
  // 调用生成器返回属于Generator类的对象，可以用foreach()函数迭代
  // 没产出一个值，生成器内部状态会停顿，向生成器请求下一个值时，内部状态又会恢复
  // 知道末尾或者空的return;为止
  function myGenerator(){
    yield 'value1';
    yield 'value2';
    yield 'value3';
  }

  foreach(myGenerator() as $yieldedValue){
    echo $yieldedValue;
    echo '<br/>';
  }

  // -----

  function makeRange($length){
    $dateset = [];
    for($i=0;$i<$length;$i++){
      $dateset[] = $i;
    }
    return $dateset;
  }

  // 这里写 100000 什么的就很可怕了
  $customRange = makeRange(10);
  foreach($customRange as $i){
    echo $i;
    echo '<br/>';
  }

  function makeRange2($length){
    for($i=0;$i<$length;$i++){
      yield $i;
    }
  }

  // 第一个没有善用内存， makeRange() 函数预先创建一个由十万个证书组成的数组分配内存，而使用makeRange2()只会为一个整数分配内存

  foreach (makeRange2(1000) as $i) {
    echo $i;
    echo '<br/>';
  }

  // 如果我们想迭代一个4gb的csv(comma separated value，逗号分隔的值)文件，虚拟私有服务器vps(virtual private server)只允许php使用1gb内存，不能整个加载到内存中
  function getRows($file){
    $handle = fopen($file,'rb');
    if($handle===FALSE){
      throw new Exception();
    }
    while(feof($handle)===FALSE){
      yield fgetcsv($handle);
    }
    fclose($handle);
  }

  // 只分配一行的内存
  foreach(getRows('data.csv') as $row){
    print_r($row);
    // Array ( [0] => abc ) Array ( [0] => def ) Array ( [0] => ghi ) Array ( [0] => jkl ) Array ( [0] => mno ) Array ( [0] => pqr ) Array ( [0] => stu ) Array ( [0] => vwx ) Array ( [0] => yz )
  }
?>
