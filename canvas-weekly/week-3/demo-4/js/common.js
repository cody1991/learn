(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    var angle = 0,
        range = 0.5,
        speed = 0.05,
        centerScale = 1;

    var ball = new Ball();
    ball.x = centerX;
    ball.y = centerY;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);

        ball.scaleX = ball.scaleY = centerScale + Math.sin(angle) * range;
        angle += speed;

        ball.draw(context);
    })();
})();
