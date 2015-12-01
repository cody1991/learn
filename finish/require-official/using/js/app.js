requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        hello: '../app/hello'
    },
    shim: {
        // hello: {
        //     exports: 'hello'
        //     //  exports: 'hello' 中的 hello ，是我们在 hello.js 中定义的 hello 函数
        // }
        hello: {
            init: function() {
                return {
                    hello: hello,
                    hello2: hello2
                }
            }
        }
    }
});

requirejs(['jquery', 'app/common'], function($, common) {
    console.log($(window));
    console.log(common.hello())
});

requirejs(['hello'], function(hello) {
    hello.hello();
    hello.hello2();
});
