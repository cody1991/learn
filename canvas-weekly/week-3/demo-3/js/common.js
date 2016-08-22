(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    var angle = 0,
        range = 50,
        xspeed = 1;

    var ball = new Ball();

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);

        context.clearRect(0, 0, canvas.width, canvas.height);

        ball.x += xspeed;

        if (ball.x > canvas.width + ball.radius) {
            ball.x = -ball.radius;
        }

        ball.y = canvas.height / 2 + Math.sin(angle) * range;

        angle += 0.05;

        ball.draw(context);
    })();
})();
