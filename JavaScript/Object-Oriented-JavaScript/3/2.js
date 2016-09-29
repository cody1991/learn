// function multiplyByTwo(a, b, c) {
//     var i, ar = [];
//     for (i = 0; i < 3; i++) {
//         ar[i] = arguments[i] * 2;
//     }
//     return ar;
// }

function addOne(a) {
    return a + 1;
}

// console.log(multiplyByTwo(1, 2, 3));
// console.log(addOne(100));

// var myarr = [];
// myarr = multiplyByTwo(10, 20, 30);

// for (var i = 0; i < 3; i++) {
//     myarr[i] = addOne(myarr[i]);
// }

// console.log(myarr)

// 使用回调

function multiplyByTwo(a, b, c, callback) {
    var i, ar = [];
    for (i = 0; i < 3; i++) {
        ar[i] = callback(arguments[i] * 2);
    }
    return ar;
}

var myarr = [];
// myarr = multiplyByTwo(1, 2, 3, addOne);
myarr = multiplyByTwo(1, 2, 3, function(a) {
    return a + 1;
});

console.log(myarr);
