(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(40, 20);
    ctx.lineTo(100, 20);
    ctx.arcTo(120, 20, 120, 40, 20);
    ctx.lineTo(120, 70);
    ctx.arcTo(120, 90, 100, 90, 20);
    ctx.lineTo(40, 90);
    ctx.arcTo(20, 90, 20, 70, 20);
    ctx.lineTo(20, 40);
    ctx.arcTo(20, 20, 40, 20, 20);

    ctx.stroke();

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
