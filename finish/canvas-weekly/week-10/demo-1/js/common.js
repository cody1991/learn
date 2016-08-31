(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var ball = new Ball(20, 'red'),
        easing = 0.05,
        targetX = canvasW,
        targetY = canvasH;

    ball.x = 0;
    ball.y = 0;

    !(function drawFrame() {
        var stopAni = window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        var dx = targetX - ball.x;
        if (Math.abs(dx) < 0.01) {
            ball.x = targetX;
            ball.y = targetY;
            window.cancelAnimationFrame(stopAni);
        } else {
            var vx = (targetX - ball.x) * easing;
            var vy = (targetY - ball.y) * easing;
            ball.x += vx;
            ball.y += vy;
        }
        ball.draw(context);
    })();
})();
