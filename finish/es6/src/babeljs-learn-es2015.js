let evens = [2, 4, 6, 8, 10];


var odds = evens.map(v => v + 1);

console.log(odds);

var nums = evens.map((v, i) => v + i);

console.log(nums);

let numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let fives = [];

numss.forEach(v => {
    if (v % 5 === 0)
        fives.push(v)
});

console.log(fives);

var bob = {
    _name: 'Bob',
    _friends: [],
    printFriends() {
        this._friends.forEach(f => console.log(this._name + ' knows ' + f));
    },
    pushFriends(arrays) {
        this._friends.push(arrays);
    }
}

bob.pushFriends(['tang', 'ze', 'xiong']);

bob.printFriends();


var name = 'Bob',
    time = 'today';

console.log(`Hello ${name},how are you ${time}`);


var [a, b] = [1, 2, 3];

console.log(a);
console.log(b);

function f(x, ...y) {
    return x * y.length;
}

console.log(f(3, 'hello', true) == 6);

function f2(x, y, z) {
    return x + y + z;
}

console.log(f2(...[1, 2, 3]));


let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0,
            cur = 1;

        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return {
                    done: false,
                    value: cur
                }
            }
        }
    }
}

for (var n of fibonacci) {
    if (n > 100)
        break;
    console.log(n);
}


// let fibonacci2 = {
//     [Symbol.iterator]: function*() {
//         var pre = 0,
//             cur = 1;

//         for (;;) {
//             var temp = pre;
//             pre = cur;
//             cur += temp;
//             yield cur;
//         }
//     }
// }


// for (var n of fibonacci2) {
//     if (n > 100)
//         break;
//     console.log(n);
// }


console.log("𠮷".length);

console.log("𠮷".match(/./)[0].length);
console.log("𠮷".match(/./u)[0].length);

console.log("\u{20BB7}" == "𠮷");
console.log("\uD842\uDFB7" == "𠮷");

console.log("𠮷".codePointAt(0) == 0x20BB7);

for (var c of "𠮷") {
    console.log(c);
}


import * as math from "./math";

console.log("2π = " + math.sum(math.pi, math.pi));
