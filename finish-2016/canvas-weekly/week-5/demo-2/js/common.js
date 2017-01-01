(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var ball = new Ball(20);
    ball.x = canvasW / 6;
    ball.y = canvasH / 6;

    var vx = 0,
        vy = 0,
        ax = 0,
        ay = 0,
        angle = 30,
        aTotal = 0.05;

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        ax = Math.cos(30 * Math.PI / 180) * aTotal;
        ay = Math.sin(30 * Math.PI / 180) * aTotal;

        vx += ax;
        vy += ay;

        ball.x += vx;
        ball.y += vy;
        ball.draw(context);
    })();
})();
