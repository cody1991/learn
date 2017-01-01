(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    var ball = new Ball();
    ball.x = canvas.width / 4;
    ball.y = canvas.height / 4;

    var speed = 5,
        angle = 30;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);

        var vx = Math.cos(angle * Math.PI / 180) * speed;
        var vy = Math.sin(angle * Math.PI / 180) * speed;

        ball.x += vx;
        ball.y += vy;
        ball.draw(context);

    })();
})();
