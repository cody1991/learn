(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var vr = 30,
        speed = 2;

    var arrow = new Arrow();
    arrow.x = centerX;
    arrow.y = centerY;

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        arrow.rotation = vr * Math.PI / 180;

        arrow.x += Math.cos(arrow.rotation) * speed;
        arrow.y += Math.sin(arrow.rotation) * speed;

        arrow.draw(context);
    })();
})();
