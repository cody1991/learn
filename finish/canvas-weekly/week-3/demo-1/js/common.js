(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    var mouse = utils.captureMouse(canvas);
    var arrow = new Arrow(),
        arrow2 = new Arrow(),
        arrow3 = new Arrow();

    arrow.x = centerX;
    arrow.y = centerY;

    arrow2.x = centerX - 120;
    arrow2.y = centerY - 120;

    arrow3.x = centerX + 120;
    arrow3.y = centerY + 120;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);

        var dx = mouse.x - arrow.x,
            dy = mouse.y - arrow.y;

        arrow.rotation = Math.atan2(dy, dx);
        arrow.draw(context);

        dx = mouse.x - arrow2.x;
        dy = mouse.y - arrow2.y;

        arrow2.rotation = Math.atan2(dy, dx);
        arrow2.draw(context);

        dx = mouse.x - arrow3.x;
        dy = mouse.y - arrow3.y;

        arrow3.rotation = Math.atan2(dy, dx);
        arrow3.draw(context);
    })();
})();
