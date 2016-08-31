(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var balls = [],
        numBall = 10;

    for (var i = 0; i < numBall; i++) {
        var size = Math.random() * 20 + 5,
            color = '#' + (Math.random() * 0xffffff << 0).toString(16),
            ball = new Ball(size, color);

        ball.id = 'ball_' + i;
        ball.radius = Math.random() * 30 + 10;
        ball.x = Math.random() * canvasW;
        ball.y = Math.random() * canvasH;

        ball.vx = Math.random() * 2 - 1;
        ball.vy = Math.random() * 2 - 1;

        balls.push(ball);
    }

    function draw(ball, pos) {
        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.x - ball.radius > canvasW || ball.radius + ball.x < 0 || ball.y - ball.radius > canvasH || ball.y + ball.radius < 0) {
            balls.splice(pos, 1);
            if (balls.length > 0) {
                console.log('移除' + ball.id);
            } else {
                console.log('全部移除');
            }
        }

        ball.draw(context);
    }

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        var i = balls.length;
        while (i--) {
            draw(balls[i], i);
        }
    })();
})();
