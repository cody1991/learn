(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var mouse = utils.captureMouse(canvas),
        ball0 = new Ball(20, '#4499ff'),
        ball1 = new Ball(20, '#ff0000'),
        ball2 = new Ball(20, '#00ff00'),
        spring = 0.03,
        springLength = 100,
        f = 0.9,
        targetX,
        targetY,
        ballHandle0 = false,
        ballHandle1 = false,
        ballHandle2 = false;

    ball0.x = Math.random() * canvasW;
    ball0.y = Math.random() * canvasH;

    ball1.x = Math.random() * canvasW;
    ball1.y = Math.random() * canvasH;

    ball2.x = Math.random() * canvasW;
    ball2.y = Math.random() * canvasH;

    canvas.addEventListener('mousedown', function(e) {
        if (utils.containsPoint(ball0.getBounds(), mouse.x, mouse.y)) {
            ballHandle0 = true;
        }

        if (utils.containsPoint(ball1.getBounds(), mouse.x, mouse.y)) {
            ballHandle1 = true;
        }

        if (utils.containsPoint(ball2.getBounds(), mouse.x, mouse.y)) {
            ballHandle2 = true;
        }
    }, false);

    canvas.addEventListener('mouseup', function(e) {
        if (ballHandle0 || ballHandle1 || ballHandle2) {
            ballHandle0 = false;
            ballHandle1 = false;
            ballHandle2 = false;
        }
    }, false);

    canvas.addEventListener('mousemove', function(e) {
        if (ballHandle0) {
            ball0.x = mouse.x;
            ball0.y = mouse.y;
        }
        if (ballHandle1) {
            ball1.x = mouse.x;
            ball1.y = mouse.y;
        }
        if (ballHandle2) {
            ball2.x = mouse.x;
            ball2.y = mouse.y;
        }
    }, false);

    function springTo(ballA, ballB) {
        var dx = ballB.x - ballA.x,
            dy = ballB.y - ballA.y,
            angle = Math.atan2(dy, dx);

        var targetX = ballB.x - Math.cos(angle) * springLength,
            targetY = ballB.y - Math.sin(angle) * springLength;

        ballA.vx += (targetX - ballA.x) * spring;
        ballA.vy += (targetY - ballA.y) * spring;

        ballA.vx *= f;
        ballA.vy *= f;

        ballA.x += ballA.vx;
        ballA.y += ballA.vy;
    }

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        if (!ballHandle0) {
            springTo(ball0, ball1);
            springTo(ball0, ball2);
        }

        if (!ballHandle1) {
            springTo(ball1, ball0);
            springTo(ball1, ball2);
        }

        if (ballHandle2) {
            springTo(ball2, ball0);
            springTo(ball2, ball1);
        }

        context.save();
        context.beginPath();
        context.strokeStyle = '#fff';
        context.moveTo(ball0.x, ball0.y);
        context.lineTo(ball1.x, ball1.y);
        context.lineTo(ball2.x, ball2.y);
        context.lineTo(ball0.x, ball0.y);
        context.stroke();
        context.closePath();
        context.restore();

        ball0.draw(context);
        ball1.draw(context);
        ball2.draw(context);
    })();
})();
