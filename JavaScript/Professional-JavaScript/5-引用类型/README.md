sort() 方法排序的时候是比较字符串，使用每项的 toString()

    function compare(value1,value2){
        if(value1 < value2){
            return -1;
        } else if(value > value2){
            // 大于的时候调换位置
            return 1;
        } else {
            return 0;
        }
    }

    =>  return value2 -value1;

    values.sort(compare);

---

    var now = new Date();

    var someDay = new Date(Date.parse('  format '))

    =>

    format:

    6/13/2004

    January 12,2015

    Tus May 25 2004 00:00:00 GMT-0700

    2014-05-25T00:00:00

---

正则：下面是元字符，要转义

    ([{  \ ^ $ | ? * + .  }])

---

    /\[bc\]at/   RegExp('\\[bc\\]at')
    
    /\.at/    \\.at

    /\d.\d{1,2}/    \\d.\\d{1,2}

    /name\/age/    name\\/age

    /\w\\hello\\123/    \\w\\\\hello\\\\123

---

pattern:

    pattern.exec(word);

    ===

    word.match(pattern)

---

split() 第二个指定长度
