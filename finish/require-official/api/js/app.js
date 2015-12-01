requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});

requirejs(['jquery', 'app/common'], function($, common) {
    console.log($(window), common);
});
