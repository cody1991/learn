(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    // for (var angle = 0; angle < Math.PI * 2; angle += 0.1) {
    //     console.log(Math.sin(angle));
    // }

    var ball = new Ball();
    ball.x = centerX;
    ball.y = centerY;

    var angle = 0,
        range = 50;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);

        ball.x = centerX + Math.sin(angle) * range;
        angle += 0.1;

        ball.draw(context);
    })();
})();
