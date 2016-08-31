(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height,
        mouse = utils.captureMouse(canvas);

    var ball = new Ball(20, 'red'),
        ball2 = new Ball(10, 'yellow');
    var vx, vy,
        easing = 0.05,
        easing2 = 0.03;

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        vx = (mouse.x - ball.x) * easing;
        vy = (mouse.y - ball.y) * easing;

        ball.x += vx;
        ball.y += vy;

        ball.draw(context);

        vx = (mouse.x - ball2.x) * easing2;
        vy = (mouse.y - ball2.y) * easing2;

        ball2.x += vx;
        ball2.y += vy;

        ball2.draw(context);
    })();
})();
