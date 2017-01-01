(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var mouse = utils.captureMouse(canvas);

    var arrow = new Arrow();
    arrow.x = centerX;
    arrow.y = centerY;

    var angle = 0,
        speed = 2;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        var dx = mouse.x - arrow.x;
        var dy = mouse.y - arrow.y;


        angle = Math.atan2(dy, dx);

        arrow.rotation = angle;

        var vx = Math.cos(angle) * speed;
        var vy = Math.sin(angle) * speed;

        arrow.x += vx;
        arrow.y += vy;

        arrow.draw(context);
    })();
})();
