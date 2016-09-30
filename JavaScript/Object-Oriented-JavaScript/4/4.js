var some_obj = {
    name: 'Ninja',
    say: function() {
        return 'I am a ' + this.name
    }
}

function F() {

}

console.log(typeof F.prototype);

F.prototype = some_obj;

var obj = new F();
console.log(obj.name);
console.log(obj.say());

console.log(obj.say.toString());

var my_obj = {
    name: 'Scripting'
}

console.log(some_obj.say.call(my_obj, 'a', 'b', 'c'));
console.log(some_obj.say.apply(my_obj, ['a', 'b', 'c']));

// arguments不是单纯数组，只有length和索引元素 但是没有sort() slice()

// arguments.callee 返回自身的引用

function f() {
    return arguments.callee;
}

console.log(f());

var n = new Number(255);
console.log(n.toString());
console.log(n.toString(10));
console.log(n.toString(16));
console.log(n.toString(2));

var s = new String('Couch potato');
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.charAt(0));
console.log(s[0]);
console.log(s.indexOf('o'));
console.log(s.indexOf('o', 2));
console.log(s.lastIndexOf('o'));
console.log(s.indexOf('Couch'));

// slice substring 参数都是起始位置
// 不同的是substring把负数当做从0开始
// slice会和长度想加，比如
// substring(1,-1) => substring(1,0)
// slice(1,s.length-1) => slice(1,s.length-1)

console.log(s.slice(1, -1));
console.log(s.substring(1, -1));

// split

// concat
