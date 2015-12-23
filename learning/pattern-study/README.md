(教程地址)[http://web.jobbole.com/84450/]

---

1. 直接量语法

    /pattern/attributes

2. 创建RegExp对象的语法

    new RegExp(pattern,attributes)

参数：参数pattern是一个字符串，指定了正则表达式的模式；

参数attributes是一个可选的参数，包含属性 g，i，m，分别使用与全局匹配，不区分大小写匹配，多行匹配；

@return 返回值：一个新的RegExp对象，具有指定的模式和标志；

---

search()方法

该方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的字符串。

基本语法：stringObject.search(regexp);

@param 参数regexp可以需要在stringObject中检索的字符串，也可以是需要检索的RegExp对象。

@return(返回值) stringObject中第一个与regexp对象相匹配的子串的起始位置。如果没有找到任何匹配的子串，则返回-1；

注意：search()方法不执行全局匹配，它将忽略标志g，同时它也没有regexp对象的lastIndex的属性，且总是从字符串开始位置进行查找，总是返回的是stringObject匹配的第一个位置。

---

match()方法

该方法用于在字符串内检索指定的值，或找到一个或者多个正则表达式的匹配。该方法类似于indexOf()或者lastIndexOf(); 但是它返回的是指定的值，而不是字符串的位置；

基本语法：stringObject.match(searchValue) 或者stringObject.match(regexp)

@param(参数) searchValue 需要检索字符串的值；regexp: 需要匹配模式的RegExp对象；

@return(返回值) 存放匹配成功的数组; 它可以全局匹配模式，全局匹配的话，它返回的是一个数组。如果没有找到任何的一个匹配，那么它将返回的是null；返回的数组内有三个元素，第一个元素的存放的是匹配的文本，还有二个对象属性；index属性表明的是匹配文本的起始字符在stringObject中的位置；input属性声明的是对stringObject对象的引用；