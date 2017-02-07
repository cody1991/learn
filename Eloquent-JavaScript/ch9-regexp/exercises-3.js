// Fill in this regular expression.
var number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;

// 开头可以是 + - 或者空
// 中间部分的数字可以是
// \d+(\.\d*)? 整数，或者带有小数点和小数部分
// \.\d+ 带有小数点和小数部分
// 最后 eE +- \d+ 要在一块，所以最后有个 ?

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
  "1e+12"
].forEach(function (s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
  "."
].forEach(function (s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});
