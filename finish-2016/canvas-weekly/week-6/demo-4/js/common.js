(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var vx = Math.random() * 10 - 5;
    var vy = Math.random() * 10 - 5;

    var color = '#' + (Math.random() * 0xffffff << 0).toString(16);

    var ball = new Ball(20, color);

    ball.x = centerX;
    ball.y = centerY;


    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        ball.x += vx;
        ball.y += vy;

        // bounce的值设为[-1, 0)之间的值试一试
        var bounce = -0.8;

        if (ball.x + ball.radius > canvasW) {
            ball.x = canvasW - ball.radius;
            vx *= bounce;
        } else if (ball.x - ball.radius < 0) {
            ball.x = ball.radius;
            vx *= bounce;
        }

        if (ball.y + ball.radius > canvasH) {
            ball.y = canvasH - ball.radius;
            vy *= bounce;
        } else if (ball.y - ball.radius < 0) {
            ball.y = ball.radius;
            vy *= bounce;
        }

        ball.draw(context);

    })();
})();
