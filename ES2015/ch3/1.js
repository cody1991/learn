const arr1 = [];

for (var i = 0; i < 3; i++) {
    arr1.push(() => i);
}

console.log(arr1);

const arr2 = arr1.map(x => x());

console.log(arr2);

const arr3 = [];

for (let i = 0; i < 3; i++) {
    arr3.push(() => i);
}

console.log(arr3);

const arr4 = arr3.map(x => x());

console.log(arr4);
