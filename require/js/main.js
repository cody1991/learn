// config是一个js对象，常配置的有baseUrl和paths
require.config({
    paths: {
        'jquery': './jquery-2.1.4.min',
        'jquery.transit': './jquery.transit',
        'two': './two',
        'three': './three'
    },
    shim: {
        'jquery.transit': ['jquery']
    }
});

require(['jquery.transit'], function(transit) {
    console.log(transit);
});

// require(['two'], function(two) {
//     var a = 4;
//     console.log(two(a));
// });

require(['three'], function(three) {
    var b = 6;
    console.log(three(b));
});
