requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        swiper: ['http://7xnv74.com1.z0.glb.clouddn.com/static/lib/swiper/js/swiper.jquery.mi', 'swiper.jquery.min']
    },
    shim: {
        swiper: ['jquery']
    }
});

requirejs(['swiper'], function(swiper) {
    var swiper = new Swiper('.swiper-container');
});
