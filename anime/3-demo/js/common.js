(function() {
    anime({
        targets: 'div',
        translateX: '13.5rem',
        scale: [0.75, 0.9],
        delay: function(el, index) {
            return index * 80;
        },
        direction: 'alternate',
        loop: true
    })
})();
