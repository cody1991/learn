(function() {
    window.onload = function() {
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            loop: true,
            parallax: true,
            pagination: '.swiper-pagination',
            mousewheelControl: true
        });
    }
})();
