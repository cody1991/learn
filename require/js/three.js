define(['two'], function(two) {
    function three(a) {
        return two(a) * a;
    }
    return three;
});
