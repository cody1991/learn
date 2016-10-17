ES5  Object.defineProperty();

参数：属性所在的对象，属性的名字，和一个描述符对象

描述符对象的值必须是 configurable enumerable writable value

使用defineProperty，如果不指定 configurable enumberable 和writeable 默认都是false

---

访问器属性不包含数据值：包含一对getter和setter函数。读取访问器的时候调用getter()，写入访问器属性的时候，调用setter函数
