<?php  
echo preg_replace_callback('~-([a-z])~', function($match){
  return strtoupper($match[1]);
}, 'hello-world');

$message = 'hello';

// 没有 "use" 报错
// $example = function () {
//     var_dump($message);
// };

$example = function() use ($message){
  var_dump($message);
};

echo $example();

$message = 'world';

echo $example();

$message = 'hello';
$example = function() use (&$message){
  var_dump($message);
};

echo $example();

$message = 'world';
echo $example();

$example = function($arg) use ($message){
  var_dump($arg . ' ' . $message);
};

$example('hello');

// Notice: Undefined variable: message in /example.php on line 6
// NULL
// string(5) "hello"
// string(5) "hello"
// string(5) "hello"
// string(5) "world"
// string(11) "hello world"

class Cart{
  const PRICE_BUTTER = 1.00;
  const PRICE_MILK = 3.00;
  const PRICE_EGGS = 6.95;

  protected $products = array();

  public function add($product,$quantity){
    $this->products[$product] = $quantity;
  }

  public function getQuantity($product){
    return isset($this->products[$product]) ? $this->products[$product] : FALSE;
  }

  public function getTotal($tax){
    $total = 0.00;

    // value,key
    $callback = function($quantity,$product) use ($tax,&$total){
      $pricePerItem = constant((__CLASS__ . "::PRICE_" . strtoupper($product)));

      echo $pricePerItem;

      $total += ($pricePerItem * $quantity) * ($tax+1.0);
    };

    array_walk($this->products,$callback);

    return round($total,2);
  }
}

$my_cart = new Cart();

$my_cart->add('butter', 1);
$my_cart->add('milk', 3);
$my_cart->add('eggs', 6);
print $my_cart->getTotal(0.05);

?>
