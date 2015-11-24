// config是一个js对象，常配置的有baseUrl和paths
require.config({
    paths: {
        jqueryTransit: './jquery.transit.min',
        jquery: [
            'http://cdn.bootcss.com/jquery/2.1.4/jquery.min',
            './jquery-2.1.4.min'
        ],
        two: './two',
        three: './three'
    },
    shim: {
        'jqueryTransit': ['jquery']
    }
});

require(['jqueryTransit'], function(transit) {
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
