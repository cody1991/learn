<?php
$closure = function($name){
  return sprintf('Hello %s',$name);
};

echo $closure("Josh");

$numbersPlusOne = array_map(function($number){
  return $number + 1;
},[1,2,3]);

print_r($numbersPlusOne);

echo "<br/>";

// 之前

function incrementNumber($number){
  return $number+1;
}

$numbersPlusOne = array_map('incrementNumber',[1,2,3]);
print_r($numbersPlusOne);

echo "<br/>";
echo "<pre>";

print_r(array_map(function($number){
  return $number * 2;
},range(1,5)));

$a = array(1,2,3,4,5);
$b = array('uno','dos','tres','cuatro','cinco');

$c = array_map(function($n,$m){
  return ("Then number $n is called $m in Spanish");
},$a,$b);

$d = array_map(function($n,$m){
  return (array($n=>$m));
},$a,$b);

echo "<br/>";

print_r($c);

echo "<br/>";

print_r($d);

$e = array("one","two","three","four","five");

// An interesting use of this function is to construct an array of arrays, which can be easily performed by using NULL as the name of the callback function
$f = array_map(null,$a,$e,$b);

echo "<br/>";
print_r($f);

$arr = array("stringkey"=>"value");

// The returned array will preserve the keys of the array argument if and only if exactly one array is passed. If more than one array is passed, the returned array will have sequential integer keys.
var_dump(array_map(function($a){
  return array($a);
},$arr));
// array(1) {
//   ["stringkey"]=>
//   array(1) {
//     [0]=>
//     string(5) "value"
//   }
// }

var_dump(array_map(function($a,$b){
  return array($a,$b);
},$arr,$arr));
// array(1) {
//   [0]=>
//   array(2) {
//     [0]=>
//     string(5) "value"
//     [1]=>
//     string(5) "value"
//   }
// }

var_dump(array_map(null,$arr));
// array(1) {
//   ["stringkey"]=>
//   string(5) "value"
// }

var_dump(array_map(null,$arr,$arr));
// array(1) {
//   [0]=>
//   array(2) {
//     [0]=>
//     string(5) "value"
//     [1]=>
//     string(5) "value"
//   }
// }

// 附加状态

function enclosePerson($name){
  return function ($doCommand) use ($name){
    return sprintf('%s,%s',$name,$doCommand);
  };
}

$clay = enclosePerson('Clay');

echo $clay('get me sweet tea!');

class App{
  protected $routes = array();
  protected $responseStatus = '200 OK';
  protected $responseContentType = 'text/html';
  protected $responseBody = 'Hello world';

  public function addRoute($routePath,$routeCallback){
    $this->routes[$routePath] = $routeCallback->bindTo($this,__CLASS__);
  }

  public function dispatch($currentPath){
    foreach($this->routes as $routePath => $callback){
      if($routePath === $currentPath){
        echo $routePath;
        echo $currentPath;
        $callback();
      }
    }

    header('HTTP/1.1:' . $this->responseStatus);
    header('Content-type: ' . $this->responseContentType);
    // 多字节字符串 函数 mb_strlen() 计算长度
    header('Content-length: ' . mb_strlen($this->responseBody));

    echo $this->responseContentType;
    echo $this->responseBody;
  }
}

$app = new App();
$app->addRoute('/users/josh',function(){
  $this->responseContentType = 'application/json;charset=utf8';
  $this->responseBody = '{"name":"Josh"}';
});
$app->dispatch('/users/josh');

?>
