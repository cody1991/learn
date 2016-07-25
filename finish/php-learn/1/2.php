<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        echo $GLOBALS;
        // 所有全局变量数组 $GLOBALS['myvariable']

        echo $_SERVER;
        // 服务器环境变量数组

        echo $_GET;
        // 通过GET方法传递给该脚本的变量数组

        echo $_POST;
        // 通过POST方法传递给该脚本的变量数组

        echo $_COOKIE; 
        // cookie变量数组

        echo $_FILES;
        // 与上传文件相关的变量数组

        echo $_ENV;
        // 环境变量数组

        echo $_REQUEST;
        // 所有用户输入的变量数组 包括 $_GET,$_POST,$_COOKIE 但是不包括4.3以后的$_FILES

        // echo $_SESSION;
        // 会话变量数组

        echo '注意看注释';
    ?>
</body>
</html>
