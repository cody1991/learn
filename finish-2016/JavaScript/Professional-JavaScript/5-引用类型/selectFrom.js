function selectFrom(lower, upper) {
    var choices = upper - lower + 1;
    return Math.floor(Math.random() * choices + lower);
}

var num = selectFrom(2, 10);
console.log(num);
