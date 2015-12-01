requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery'
    }
});


requirejs(['jquery'], function($) {
    console.log($(window));
});
