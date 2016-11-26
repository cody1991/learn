var candianDollar = 0.91;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

module.exports.canadianToUS = function(canadian) {
    return roundTwoDecimals(canadian * candianDollar);
}

module.exports.USToCanadian = function(us) {
    return roundTwoDecimals(us / candianDollar);
}
