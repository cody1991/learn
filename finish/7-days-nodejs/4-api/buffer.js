// JS语言自身只有字符串数据类型，没有二进制数据类型，因此NodeJS提供了一个与String对等的全局构造函数Buffer来提供对二进制数据的操作。除了可以读取文件得到Buffer的实例外，还能够直接构造
var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

console.log(bin);

// Buffer与字符串类似，除了可以用.length属性得到字节长度外，还可以用[index]方式读取指定位置的字节

console.log(bin[0]);

var str = bin.toString('utf-8');

console.log(str);

var bin2 = new Buffer('hello', 'utf-8');

console.log(bin2);

// Buffer与字符串有一个重要区别。字符串是只读的，并且对字符串的任何修改得到的都是一个新字符串，原字符串保持不变。至于Buffer，更像是可以做指针操作的C语言数组。例如，可以用[index]方式直接修改某个位置的字节。

bin[0] = 0x48;

var str2 = bin.toString('utf-8');

console.log(str2);

var bin3 = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);


// 而.slice方法也不是返回一个新的Buffer，而更像是返回了指向原Buffer中间的某个位置的指针
var sub = bin3.slice(2);

console.log(sub);
// 6c 6c 6f

console.log(bin3);
// 68 65 6c 6c 6f


// 因此对.slice方法返回的Buffer的修改会作用于原Buffer，例如：

sub[0] = 0x65;
console.log(sub);
// 65 6c 6f
console.log(bin3);
// 68 65 65 6c 6f


// 因此，如果想要拷贝一份Buffer，得首先创建一个新的Buffer，并通过.copy方法把原Buffer中的数据复制过去。这个类似于申请一块新的内存，并把已有内存中的数据复制过去。

var bin4 = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var dup = new Buffer(bin4.length);

bin4.copy(dup);
dup[0] = 0x48;

console.log(bin4); // => <Buffer 68 65 6c 6c 6f>
console.log(dup); // => <Buffer 48 65 65 6c 6f>