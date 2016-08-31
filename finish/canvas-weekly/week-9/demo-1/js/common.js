(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var mouse = utils.captureMouse(canvas);

    var ball = new Ball(20, 'red');

    ball.x = centerX;
    ball.y = centerY;

    var vx = Math.random() * 10 + 5,
        vy = -10,
        bounce = -0.8,
        gravity = 1.8,
        speed,
        oldX,
        oldY;

    var isMouseDown = false,
        w = 0,
        h = 0;

    canvas.addEventListener('mousedown', function(event) {
        if (utils.containsPoint(ball.getBounds(), mouse.x, mouse.y)) {
            w = mouse.x - ball.x;
            h = mouse.y - ball.y;

            isMouseDown = true;
            oldX = ball.x;
            oldY = ball.y;

            canvas.addEventListener('mouseup', onMouseUp, false);
            canvas.addEventListener('mousemove', onMouseMove, false);
        }
    }, false);

    function onMouseUp(event) {
        isMouseDown = false;
        canvas.removeEventListener('mouseup', onMouseUp, false);
        canvas.removeEventListener('mousemove', onMouseMove, false);
    }

    function onMouseMove(event) {
        ball.x = mouse.x - w;
        ball.y = mouse.y - h;
    }

    function checkBoundries() {
        var left = canvasW,
            right = 0,
            top = 0,
            bottom = canvasH;

        ball.x += vx;
        vy += gravity;
        ball.y += vy;

        if (ball.x + ball.radius > left) {
            vx *= bounce;
            ball.x = left - ball.radius;
        } else if (ball.x - ball.radius < right) {
            vx *= bounce;
            ball.x = ball.radius;
        }

        if (ball.y + ball.radius > bottom) {
            vy *= bounce;
            ball.y = bottom - ball.radius;
        } else if (ball.y - ball.radius < top) {
            vy *= bounce;
            ball.y = ball.radius;
        }
    }

    function trackVelocity() {
        vx = ball.x - oldX;
        vy = ball.y - oldY;

        oldX = ball.x;
        oldY = ball.y;

        speed = Math.sqrt(vx * vx + vy * vy);
        console.log('当前速度为:' + speed.toFixed());
    }

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        if (!isMouseDown) {
            checkBoundries();
        } else {
            trackVelocity();
        }

        ball.draw(context);
    })();
})();
