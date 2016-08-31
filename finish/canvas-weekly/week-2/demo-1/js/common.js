(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        mouse = utils.captureMouse(canvas),
        touch = utils.captureTouch(canvas);

    canvas.addEventListener('mousedown', function(event) {
        console.log("x:" + mouse.x + ",y:" + mouse.y);
    });

    canvas.addEventListener('touchmove', function(event) {
        console.log("x:" + touch.x + ",y:" + touch.y);
    });

    function onKeyboard(event) {
        switch (event.keyCode) {
            case 38:
                console.log('up!');
                break;
            case 40:
                console.log('down!');
                break;
            case 37:
                console.log('left!');
                break;
            case 39:
                console.log('right!');
                break;
            default:
                console.log(event.keyCode);
        }
    }

    window.addEventListener('keydown', onKeyboard, false);
})();
