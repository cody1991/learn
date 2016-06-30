(function() {
    var path = anime.path('path');

    anime({
        targets: '.green',
        translateX: path,
        translateY: path,
        rotate: path,
        duration: 3000,
        loop: true,
        easing: 'linear'
    });

    // anime({
    //     targets: 'path',
    //     opacity: 0,
    //     duration: 6000,
    //     loop: true,
    //     direction: 'alternate',
    //     easing: 'easeInOutExpo'
    // })
})();
