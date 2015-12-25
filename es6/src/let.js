'use strict';

{
    let a = 10;
    var b = 1;
}

console.log(b);
// console.log(a); 会报错

let arr = [1,2,3];

for(let i = 0 ; i < arr.length ; i++){
    setTimeout(function(){
        console.log(i);
    })
}

// console.log(i); 会报错
