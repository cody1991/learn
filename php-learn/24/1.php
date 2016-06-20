<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
class employee
{
    public $name;
    public $employee_id;
}

$this_emp              = new employee();
$this_emp->name        = 'Cody';
$this_emp->employee_id = '1991';

echo serialize($this_emp) . '<br/>';

echo get_current_user() . '<br/>';

echo date('g:i a, j M Y', getlastmod());
?>
</body>
</html>
