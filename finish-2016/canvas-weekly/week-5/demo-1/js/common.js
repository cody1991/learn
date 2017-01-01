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
        ax = 0.1;

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        vx += ax;
        ball.x += vx;
        ball.draw(context);
    })();
})();
