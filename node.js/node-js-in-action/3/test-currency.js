var currency = require('./currency.js');

// console.log(currency);

console.log('50 Candian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50));

console.log('30 US dollars equals this amount of Canadian dollars');
console.log(currency.USToCanadian(30));
