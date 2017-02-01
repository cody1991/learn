function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }

  // typeof null 也是 object 所以这里要排除
  // 当它们都是对象的时候，才会继续判断，不然在上面的判断已经返回了
  // 所以接下来就是只有对象比较了
  // 对象可能是纯对象，或者 null
  // null 和其他对象比较 肯定返回false
  // null === null  ===> true ，这里也不存在，因为在上面返回了
  // 所以最后就只剩下真的是纯对象的继续往下判断了

  // obj1 是 null ，直接返回 false
  // obj1 不是 null ，它的类型不是 object 返回 false
  // obj2 情况上同
  // 最终就是只要 obj1 或者 obj2 其中一个是 null 或者其中一个不是 object 就返回 false
  if (obj1 === null || typeof obj1 !== 'object' || obj2 === null || typeof obj2 !== 'object') {
    return false
  }

  let propsInObj1 = 0
  let propsInObj2 = 0
  for (let prop in obj1) {
    propsInObj1++
  }
  for (let prop in obj2) {
    propsInObj2++
  }

  for (let prop in obj2) {
    // return deepEqual(obj1[prop], obj2[prop])
    if (!(prop in obj1) || !deepEqual(obj1[prop], obj2[prop])) {
      return false
    }
  }

  return propsInObj1 === propsInObj2
}

var obj = {
  here: {
    is: "an"
  },
  object: 2
};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {
  here: 1,
  object: 2
}));
// → false
console.log(deepEqual(obj, {
  here: {
    is: "an"
  },
  object: 2
}));
// → true
