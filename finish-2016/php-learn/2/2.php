<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>
    </title>
</head>
<body>
    <?php 
        $DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
        @$fp = fopen($DOCUMENT_ROOT . 'study/2/1.txt','rb'); // 只读

        if(!$fp){
            echo "<p><strong>No orders pending Please try again later.<strong></p>";
            exit;
        }

        // feof 如果到了尾部 会返回true  end of file
        while(!feof($fp)){
            // 每次读取一行

            // fgetss 可以过滤字符串中包含php和html标记
            // string fgetss(resource fp,int length ,string [allowable_tags])

            // fgetcsv()
            // string fgetcsv(resource fp,int length,[,string delimiter[,string enclosure]])

            // $order = fgetcsv($fp,100,"\t");
            
            $order = fgets($fp,999);
            // 999 最大长度

            // 上面都是读取一行数据

            echo $order."<br/>";

            // readfile() fpassthru() file()
            // fgetc()
            // fread()
            // file_exists()
            // filesize()

            // nl2br()  把输出的 \n 转换成 html 的 br

            // unlink() 删除订单文件

            // rewind() 将文件指针复位到文件的开始
            // ftell() 以字节为单位报告文件指针当前在文件的位置
        }

        echo 'final position of the file pointer is ' . (ftell($fp)) . '<br/>';

        rewind($fp);

        echo 'After rewind,the position is ' . (ftell($fp)) . '<br/>';
    ?>
</body>
</html>
