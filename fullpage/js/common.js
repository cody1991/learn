(function() {
    window.onload = function() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            pagination: '.swiper-pagination',
            watchSlidesProgress: true,
            mousewheelControl: true,
        });
    }
})();
