(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var ball = new Ball(),
        spring = 0.03,
        targetX = centerX,
        f = 0.95,
        vx = 0;

    ball.y = centerY;
    ball.x = 0;

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        var dx = targetX - ball.x,
            ax = dx * spring;

        vx += ax;
        vx *= f;

        ball.x += vx;
        ball.draw(context);
    })();
})();
