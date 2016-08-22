(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var mouse = utils.captureMouse(canvas);

    var ball = new Ball(20, 'red');

    ball.x = centerX;
    ball.y = centerY;
    ball.draw(context);

    console.log(ball);

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     context.clearRect(0, 0, canvasW, canvasH);
    // })();

    function state(wrd) {
        if (utils.containsPoint(ball.getBounds(), mouse.x, mouse.y)) {
            console.log('in ball : ' + wrd);
        } else {
            console.log('canvas : ' + wrd);
        }
    }

    canvas.addEventListener('mousedown', function(event) {
        state('mousedown');
    });
    canvas.addEventListener('mouseup', function(event) {
        state('mouseup');
    });
    canvas.addEventListener('mousemove', function(event) {
        state('mousemove');
    });
})();
