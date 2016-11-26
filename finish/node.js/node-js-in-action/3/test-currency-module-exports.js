var Currency = require('./currency-module-exports.js');

var canadianDollar = 0.91;

var Currency = new Currency(canadianDollar);

console.log(Currency.canadianToUS(50));
