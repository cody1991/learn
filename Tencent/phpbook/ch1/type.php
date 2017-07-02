<?php

$a = 56;
echo gettype($a);
settype($a, 'double');
echo gettype($a);

?>

<pre>
  is_array()

  is_double()

  is_float()

  is_real()

  is_long()

  is_int()

  is_integer()

  is_string()

  is_bool()

  is_resource()

  is_scalar()

  is_null()

  is_object()

  is_numeric()

  is_callable()
</pre>

<p>
  empty() 检查一个变量是否存在 值是否为空和非0
</p>

<pre>
  intval

  floatval

  strval
</pre>

<?php

$c = "56";
echo intval($c) . "<br/>";

// 这个表示 56 是个 8 进制的
// 5 * 8 + 6 * 1
echo intval($c, 8) . "<br/>";

// 这个表示 56 是个 16 进制的
// 5 * 16 + 6 * 1
echo intval($c, 16) . "<br/>";
?>
