// config是一个js对象，常配置的有baseUrl和paths
require.config({
    baseUrl: './js/',
    paths: {
        jquery: './jquery-2.1.4.min',
        two: './two',
        three: './three'
    }
});

require(['jquery'], function($) {
    console.log($('body'));
});

// require(['two'], function(two) {
//     var a = 4;
//     console.log(two(a));
// });

require(['three'], function(three) {
    var b = 6;
    console.log(three(b));
});
