<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<?php
function myErrorHandler($errno, $errstr, $errfile, $errline)
{
    echo $errno . ' ' . $errstr . ' ' . $errfile . ' ' . $errline . '<br/>';

    if (($errno == E_USER_ERROR) || ($errno == E_ERROR)) {
        echo 'This error was fatal,program ending';
        exit();
    }

}

set_error_handler('myErrorHandler');

trigger_error('Trigger function called', E_USER_NOTICE);
fopen('nofile', 'r');
trigger_error('This computer is beige', E_USER_WARNING);
include 'nofile';
trigger_error('This coumputer will self destrcut in 15 seconds', E_USER_ERROR);
?>
</body>
</html>
