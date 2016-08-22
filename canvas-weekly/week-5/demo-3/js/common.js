(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var ball = new Ball(20, "red");
    ball.x = centerX;
    ball.y = centerY - 200;

    var vy = 0,
        gravity = 0.2,
        bounce = -0.8;

    function checkGround(ball) {
        if (ball.y + ball.radius > canvasH) {
            ball.y = canvasH - ball.radius;
            vy *= bounce;
        }
    }

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        vy += gravity;
        ball.y += vy;

        checkGround(ball);

        ball.draw(context);
    })();
})();
