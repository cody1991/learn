(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
    ctx.moveTo(68, 130);
    var cx1 = 20,
        cy1 = 10,
        cx2 = 268,
        cy2 = 10,
        endX = 268,
        endY = 170;

    ctx.bezierCurveTo(cx1, cy1, cx2, cy2, endX, endY);
    ctx.stroke();
    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
