<?php
    $a = 27;
    $b = 10;

    $result = $a % $b;

    echo ($result) . "<br/>";


    $a = "Bob 's ";
    $b = "Auto Parts";

    $result = $a.$b;

    echo $result;

    $a = 5;
    $b = $a;
    $a = 7;

    echo '<br/>' . $a . ' ' . $b;

    $a = 5;
    $b =&$a;
    $a = 7;

    // 引用让他们指向同一个内存地址

    echo '<br/>' . $a . ' ' . $b;

    unset($a);
    $a = 8;
    echo '<br/>' . $a . ' ' . $b;

    // 重置以后 unset 他们的链接破坏掉

    // ==
    // ===
    // !=
    // !==
    // <> 不等
    // <
    // >
    // <=
    // >=

    // &
    // !
    // ~
    // ^
    // <<
    // >>

    // new ->
    // condition ?　value if true : value if false

    $out = `dir -la`;
    echo '<pre>' . $out . '</pre>';

    $out = `dir c:`;
    echo '<pre>' . $out . '</pre>';

    // $a + $b 包含a b 的数组
    // $a == $b 有相同的键值对
    // $a === $b 相同的键值对和顺序
    // !=
    // <>
    // !==

    class smapleClass{};

    $myObject = new smapleClass();
    if($myObject instanceof smapleClass)
        echo 'myObject is an instance of sampleClass';

?>
