typeof 返回：

    'undefined'

    'boolean'

    'string'

    'number'

    'object' => 对象或者 null

    'function'

---

undefined从null派生出来

null == undefined ==> true

没有必要显示设置undefined

null不适用

在意保存的对象还没有真正保存对象，明确让变量保存null值

可以提现null作为空指针的惯例，进一步区分null和undefined

---

Boolean() false => false , '' , 0 , NaN , null , undefined

---

如果数字的小数没有任何数字跟着，会被转换成整数

---

Infinity

isFinite()

---

任何值除以0 都会得到NaN

    NaN == NaN ==> false

isNaN() 尝试把它转成数值

    isNaN(NaN) =>  true

    isNaN(10) => false

    isNaN('10') => false

    isNaN('blue') => true

    isNaN(true) => false

    isNaN('10s') => true

---

Number()

    boolean => 1 和 0

    数字 => 传回原来的

    null => 0

    undefined => NaN

    字符串 =>  只有数字的时候 转成十进制

          => 包含了 . ，转成对应的浮点数

          => 有有效的十六进格式，转成相同大小的十进制数字

          => 空的，转成 0

          => 有任何其他不是上面几个的字符，转成NaN

    对象 => 调用 valueOf()方法，然后依照前面的规则转换返回的值，如果结果是NaN,调用 .toString()，然后按照前面的规则

例子：
    
    Number('Hello') => NaN

    Number('') => 0

    Number('000011') => 11

    Number(true) => 1
    
一元加的操作和 Number() 函数一样

---

parseInt 会忽略前面的空格，直到找到一个非空格字符

如果第一个字符不是数字字符或者负号，返回 NaN

parseInt('') 是NaN

继续解析第二个字符，知道解析完所有后续字符或者遇到了一个非数字字符，比如

'1234blue' => 1234

'22.5' => 22

0开头会被认为是八进制 0x开头是十六进制

    '' => NaN

    '1234blue' => 1234

    '0xA' => 10

    22.5 => 22

    '070' => 56  (es5开始不接受8进制了，所以还是70)

    '70' => 70

    '0xf' => 15

    var num = parseInt('0xAF',16) => 175

    var num = parseInt('AF',16) => 175

    var num = parseInt('AF') => NaN

    parseInt('10',2) => 2
    parseInt('10',8) => 8
    parseInt('10',10) => 10
    parseInt('10',16) => 16

---

parseFloat()

区别：

* 只有第一个小数点有效

* 会始终无视前导的0,十六进制的字符串始终转换成0,

* 只解析十进制，没有第二个参数

* 整数：返回整数

例子：

    1234blue => 1234

    0xA => 0

    22.5 => 22.5

    22.34.5 => 22.34

    0907.5 => 908.5

    3.125e7 => 3215000

---

    num = 10;

    num.toString() => '10'

    num.toString(2) => '1010'

    num.toString(8) => '12'

    num.toString(10) => '10'

    num.toString(16) => 'a'

    null和undefined没有 toString()

or

    String(10) => '10'
    String(true) => 'true'
    String(null) => 'null'
    String(undefined) => 'undefined'

---

Object 每个实例都有下列的属性和方法

    var o = new Object()

constructor：保存着用于创建当前对象的函数，对于前面的例子，构造函数就是Object()

hasOwnProperty(propertyName)：用于检测给定的属性在当前对象实例中是否存在

isPrototypeOf(object)：传入对象是否传入对象的原型

propertyIsEnumerable(prototypeName)：用于检测给定的属性是否能用 for-in 语句枚举

toString()

valueOf() 返回对象的字符串、数值或布尔值的表示。一般和toString()返回的一样

---

++ --

    应用在字符串，先把它转换成数字之，然后加1操作。字符串变成了数值变量

    不包含有效数字的字符串时，变成NaN

    false的时候，会转换成0然后加减1

    true的时候，换转换成1然后加减1

    浮点的时候，直接加减1
    
    对象例子：

    var o = {
        valueOf:function(){
            return -1;
        }
    }

    o--  => -2

---

    +"01" => 1;

    +"1.1" => 1.1

    +"123d" => NaN

    +"z" => NaN

    +false => 0

    +o => -1

---

    '12d'*4 => NaN

    Infinity * 0 = NaN （乘以非零的话是Infinity或者-Infinity）

    不是数字，调用Number()

---

    *

    有一个是NaN 就是NaN

    0 / 0 => NaN

    Infinity被任何非零数值除，结果是Infinity或者-Infinity

---

大于小于这些比较的时候，如果同时又字符串和数字，转换成数字

任何和NaN比较的都是false

---

相等和不等的比较

    如果有一个是布尔值，先转换成数值：0或者1

    如果是字符串，另外一个是数值，字符串转换成数值

    一个是对象，另一个不是，调用valueOf

    null == undefined

    比较相等性之前，不能转换null和undefined
