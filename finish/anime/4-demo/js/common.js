(function() {
    anime({
        targets: 'div',
        translateX: function() {
            return anime.random(10, 30) + 'rem';
        },
        scale: function() {
            return anime.random(10, 20) / 10;
        },
        rotate: function() {
            return anime.random(-360, 360);
        },
        duration: function() {
            return anime.random(1000, 2000);
        },
        loop: true,
        direction: 'alternate'
    })
})();
