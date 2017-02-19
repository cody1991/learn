fopen 打开文件

fopen(url, mode , .., .. )

---

```
$_SERVER['DOCUMENT_ROOT'];
```

web 服务器文档树的根

---

全局可写

```
chomd 777 ~/orders
```

---

fwrite() 别名 fputs

fwrite(handle, string, length)

fwrite($fp, $outputstrings, strlen($outputstrings))

---

fclose($fp)

---

实例：

```
@$fp = fopen('./orders/orders.txt', 'ab');

if (!$fp):
  echo '<p>Your order could not be procressed at this time.';
  exit;
endif;

fwrite($fp, $outputstrings, strlen($outputstrings));
# 锁定起来的吧
flock($fp, LOCK_UN);
fclose($fp);
```

```
@$fp = fopen('./orders/orders.txt', 'rb');
if (!$fp) {
  echo '<p>No orders pending</p>';
  exit;
}
while (!feof($fp)) {
  $order = fgets($fp, 999);
  echo $order . '<br/>';
}
```

---

1.

读取整个文件

readfile(filename)

2.

$fp = $open(filename,'rb')
fpassthru($fp)

3.

file(filename)

和 readfile() 一样，但是返回的是数组

---

fread($fp, length) 读取任意长度 

---

file_exists()

filesize()

nl2br() 把 `\n` 转成 html 的 br

unlink 删除订单文件

---

rewind() 文件指针复位到文件开始

ftell() 以字节为单位报告文件指针当前在文中的位置

---

fseek() 把文件指针 $fp 指向文件的某个位置

fseek($fp, int offset, int whence])

默认 whence 是文件 的开始处： SEEK_SET

还有可能是 SEEK_CUR 当前位置 和  SEEK_END 文件的结束

rewind() 相当于具有零偏移的 fseek()

---

flock($fp, operation)

锁定文件，具体看 P53

```

flock($fp, LOCK_EX); 写锁定

fwrite($fp, $outputstrings, strlen($outputstrings));

// flock($fp,operation)

// LOCK_SH 读操作锁定，意味文件可以共享，其他人可以读该文件
// LOCK_EX 写操作锁定，互斥的，文件不能被共享
// LOCK_UN 释放已有的锁定
// LOCK_NB 防止在请求加锁时发生阻塞
flock($fp, LOCK_UN); 写解锁

flock($fp, LOCK_SH); 读锁定
读操作;
flock($fp, LOCK_UN); 读解锁
```

---

新增的 file_put_contents file_get_contents
