(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var ball = new Ball(20, 'red');
    ball.x = canvasW / 4;
    ball.y = canvasH / 4;

    var f = 0.05,
        speed = 0,
        angle = 0;

    var vx = Math.random() * 10 - 5,
        vy = Math.random() * 10 - 5;

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        speed = Math.sqrt(vx * vx + vy * vy);
        angle = Math.atan2(vy, vx);

        if (speed > f) {
            speed -= f;
        } else {
            speed = 0;
        }

        vx = Math.cos(angle) * speed;
        vy = Math.sin(angle) * speed;

        ball.x += vx;
        ball.y += vy;

        ball.draw(context);
    })();
})();
