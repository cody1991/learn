var MODULE = (function() {
    var my = {},
        privateVariable = 1;

    function privateVariable() {
        console.log(1);
    }

    my.moduleProperty = 1;
    my.moduleMethod = function() {
        console.log(2);
    };

    return my;
}());

console.log(MODULE);

var MODULE = (function(my) {

    var old_moduleMethod = my.moduleMethod;

    my.moduleMethod = function() {
        console.log(4);
    }

    my.anotherMethod = function() {
        console.log(3);
    }

    return my;
}(MODULE || {}));

console.log(MODULE);

MODULE.moduleMethod();
