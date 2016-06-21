<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php

$test = [1, 2, 3, 4, 5];
echo dump_array($test);

function dump_array($array)
{
    if (is_array($array)) {
        $size = count($array);

        $string = "";

        if ($size) {
            $count = 0;
            $string .= "{ ";

            foreach ($array as $var => $value) {
                $string .= $var . " = " . $value;
                if ($count++ < ($size - 1)) {
                    $string .= ", ";
                }
            }
            $string .= " }";
        }
        return $string;

    } else {
        return $array;
    }
}
?>
</body>
</html>
