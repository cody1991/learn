console.log(Math.E);
console.log(Math.random());

console.log(new Date())
console.log(new Date(2016, 0, 1, 17, 05, 03, 120));

var d = new Date();
console.log(d.toString());
d.setMonth(2);
console.log(d.toString());
console.log(d.getMonth());
// 星期几 
console.log(d.getDay());

var stats = [0, 0, 0, 0, 0, 0, 0];
for (var i = 2012; i < 3012; i++) {
    stats[new Date(i, 5, 20).getDay()]++;
}

console.log(stats);
