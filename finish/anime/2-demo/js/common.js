(function() {
    anime({
        targets: '.example',
        translateX: '13rem',
        rotate: {
            value: 180,
            duration: 1500,
            easing: 'easeInOutQuad'
        },
        scale: {
            value: 2,
            delay: 150,
            duration: 850,
            easing: 'easeInOutExpo'
        },
        loop: true,
        direction: 'alternate'
    })
})();
