var a = {
    name: 1
};

var b = a;

console.log(a);
console.log(b);

b.name = 2;

console.log(a);
console.log(b);

var b = {
    name: 3
}

console.log(a);
console.log(b);
