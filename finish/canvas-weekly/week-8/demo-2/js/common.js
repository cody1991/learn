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

    var w = 0,
        h = 0;

    canvas.addEventListener('mousedown', function(event) {
        if (utils.containsPoint(ball.getBounds(), mouse.x, mouse.y)) {
            w = mouse.x - ball.x;
            h = mouse.y - ball.y;
            canvas.addEventListener('mouseup', onMouseUp, false);
            canvas.addEventListener('mousemove', onMouseMove, false);
        }
    }, false);

    function onMouseUp(event) {
        canvas.removeEventListener('mouseup', onMouseUp, false);
        canvas.removeEventListener('mousemove', onMouseMove, false);
    }

    function onMouseMove(event) {
        ball.x = mouse.x - w;
        ball.y = mouse.y - h;
    }

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        ball.draw(context);
    })();
})();
