(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var mouse = utils.captureMouse(canvas),
        ball = new Ball(20, 'orange'),
        spring = 0.03,
        friction = 0.95,
        vx = 0,
        vy = 0;

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        var dx = mouse.x - ball.x,
            dy = mouse.y - ball.y,
            ax = dx * spring,
            ay = dy * spring;

        vx += ax;
        vy += ay;
        vx *= friction;
        vy *= friction;

        ball.x += vx;
        ball.y += vy;

        context.save();
        context.beginPath();
        context.strokeStyle = '#fff';
        context.moveTo(ball.x, ball.y);
        context.lineTo(mouse.x, mouse.y);
        context.stroke();
        context.closePath();
        context.restore();

        ball.draw(context);

    })();
})();
