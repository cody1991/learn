(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    var ball = new Ball();
    ball.x = canvas.width / 4;
    ball.y = canvas.height / 4;

    var vx = 1,
        vy = 1;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);
        ball.x += vx;
        ball.y += vy;
        ball.draw(context);
    })();
})();
