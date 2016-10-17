Person.prototype.isPrototype(person1);

查看person1是否有指向Person.prototype的指针

---

对象上面增加了一个新的方法，查看[[Prototype]]

Object.getPrototypeOf(person1) === Person.prototype

Object.getPrototypeOf(person1).name

---

person1.hasOwnProperty('name')