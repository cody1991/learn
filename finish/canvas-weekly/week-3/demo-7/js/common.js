(function() {
    var canvas = document.getElementById('canvas'),
        log = document.getElementById('log'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    var mouse = utils.captureMouse(canvas);

    var rect = {
        x: centerX,
        y: centerY
    };

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);

        var dx = mouse.x - rect.x;
        var dy = mouse.y - rect.y;

        var dis = Math.sqrt(dx * dx + dy * dy);

        context.fillStyle = '#fff';
        context.fillRect(rect.x - 2, rect.y - 2, 4, 4);

        context.save();
        context.strokeStyle = '#fff';
        context.beginPath();
        context.moveTo(rect.x, rect.y);
        context.lineTo(mouse.x, mouse.y);
        context.closePath();
        context.stroke();
        context.restore();

        log.style.position = 'absolute';
        log.style.color = '#fff';
        log.style.left = (mouse.x + rect.x) + 'px';
        log.style.top = (mouse.y + rect.y) / 2 + 'px';
        log.innerHTML = dis;

    })();

})();
