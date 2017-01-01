(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var mouse = utils.captureMouse(canvas),
        ball = new Ball(20),
        handles = [],
        numHandles = 3,
        spring = 0.03,
        f = 0.9,
        movingHandle = null;

    for (var i = 0; i < numHandles; i++) {
        var handle = new Ball(10, '#0000ff');
        handle.x = Math.random() * canvasW;
        handle.y = Math.random() * canvasH;
        handles.push(handle);
    }

    canvas.addEventListener('mousedown', function(event) {
        handles.forEach(function(handle) {
            if (utils.containsPoint(handle.getBounds(), mouse.x, mouse.y)) {
                movingHandle = handle;
            }
        })
    }, false);

    canvas.addEventListener('mouseup', function(event) {
        if (movingHandle) {
            movingHandle = null
        }
    }, false);

    canvas.addEventListener('mousemove', function(event) {
        if (movingHandle) {
            movingHandle.x = mouse.x;
            movingHandle.y = mouse.y;
        }
    }, false);

    function applyHandle(handle) {
        var dx = handle.x - ball.x;
        var dy = handle.y - ball.y;

        ball.vx += dx * spring;
        ball.vy += dy * spring;
    }

    function drawHandle(handle) {
        context.strokeStyle = 'white';
        context.moveTo(ball.x, ball.y);
        context.lineTo(handle.x, handle.y);
        context.stroke();
        handle.draw(context);
    }

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        handles.forEach(applyHandle);

        ball.vx *= f;
        ball.vy *= f;
        ball.x += ball.vx;
        ball.y += ball.vy;

        context.beginPath();
        handles.forEach(drawHandle);
        context.closePath();

        ball.draw(context);
    })();
})();
