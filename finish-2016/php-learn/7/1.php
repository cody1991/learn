<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
try {
    throw new Exception("A terrible error has occurred", 42);
} catch (Exception $e) {
    echo "Exception " . $e->getCode() . ": " . $e->getMessage() . "<br/>" . " in " . $e->getFile() . " on line " . $e->getLine() . "<br/>";

    echo "<hr/>" . $e->getTraceAsString();
    echo "<hr/>" . $e;
}

// getCode() 返回传递给构造函数的代码
// getMessage() 返回传递给构造函数的信息
// getFile() 返回产生异常代码文件的完整路径
// getLine() 返回代码文件产生异常的代码行号
// getTrace() 返回一个包含了产生异常代码回退路径的数组
// getTraceAsString() 弄成字符串
// _toString();

class myException extends Exception
{
    public function __toString()
    {
        return "<table border=\"1\">
            <tr>
            <td><strong>Exception " . $this->getCode() . "
                </strong>: " . $this->getMessage() . "<br/>" .
        " in " . $this->getFile() . " on line " . $this->getLine() . "</td></tr></table></br/>";
    }
}

try {
    throw new myException("A custom error", 42);
} catch (myException $m) {
    echo $m;
}
?>
</body>
</html>
