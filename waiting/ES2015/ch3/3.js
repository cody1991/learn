const arr = [1, 2, 3];

for (const item of arr) {
    console.log(item);
}

// for..of  代替 for..in

// Array.forEach()（这个自带闭包） 代替 for 循环
// Array.forEach 参数 ： 本身 下表 数组本身

const Zoo = [{
    name: 'cody',
    gender: 1,
    species: 'fox'
}, {
    name: '1991',
    gender: 2,
    species: 'buuny'
}];

for (const {
        name,
        species
    }
    of Zoo) {
    console.log(`Hi,I am ${name},and I am a ${species}`);
}

// Array.entries() 返回每个元素和下标配对的一个新的数组
// 用 for..of 来遍历
const arr1 = ['a', 'b', 'c']

for (const [index, val] of arr1.entries()) {
    console.log(index, val);
}

for (const [index, {
        name,
        species
    }] of Zoo.entries()) {
    console.log(`${index}. Hi I am ${name}, and I am a ${species}`)
}