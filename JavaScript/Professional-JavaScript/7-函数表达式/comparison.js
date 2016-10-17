function createComparisonFunction(propertyName) {
    return function(obj1, obj2) {
        var val1 = obj1[propertyName];
        var val2 = obj2[propertyName];

        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }
}

var compareNames = createComparisonFunction('name');

var result = compareNames({
    name: 'Micholas'
}, {
    name: 'greg'
});

console.log(result);
