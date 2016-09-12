// 要执行一个对文件系统的操作，你将会用到 fs 这个 Node
//   核心模块。要加载这类核心模块，或者其他的"全局"模块，可以用下面的方式引入：

//      var fs = require('fs')

//   现在你可以通过 fs 这个变量来访问整个 fs 模块了。

//   在 fs 中，所有的同步（或者阻塞）的操作文件系统的方法名都会以 'Sync'
//   结尾。要读取一个文件，你将需要使用  fs.readFileSync('/path/to/file')
//   方法。这个方法会返回一个包含文件完整内容的 Buffer 对象。

//   fs 模块的文档，可以使用浏览器打开如下路径来访问：
//   file://C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
//   all\learnyounode\3.5.5\learnyounode\node_apidoc\fs.html

//   Buffer 对象是 Node 用来高效处理数据的方式，无论该数据是 ascii
//   还是二进制文件，或者其他的格式。Buffer 可以很容易地通过调用 toString()
//   方法转换为字符串。如：var str = buf.toString()。

//   Buffer 的文档可以通过浏览器访问如下路径来查看：
//   file://C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
//   all\learnyounode\3.5.5\learnyounode\node_apidoc\buffer.html

//   如果你在想如何更简单地去计算行数，请回想一下，一个 JavaScript
//   字符串，可以使用 .split() 分割成子字符串数组，而且，'\n'
//   可以作为分隔符。注意，供测试的文件末尾的最后一行并没有进行换行，即没有
//   '\n' 的存在，因此，使用这个方法的话，所得的数组的长度会比行数多一个。


var fs = require('fs');

var fileUrl = process.argv[2];

var buff = fs.readFileSync(fileUrl, 'utf-8');

// console.log(buff);

// buff = buff.toString();

buff = buff.split(/\n/);

// console.log(buff);

// console.log(buff)

console.log(buff.length - 1);


// var fs = require('fs')

//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)

//     // 只要把 'utf8' 作为 readFileSync 的第二个参数传入
//     // 就可以不用 .toString() 来得到一个字符串
//     //
//     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
