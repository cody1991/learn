(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.bezierCurveTo(50, 100, 100, 0, 150, 50);
    ctx.bezierCurveTo(200, 0, 250, 100, 200, 150);
    ctx.bezierCurveTo(250, 200, 200, 300, 150, 250);
    ctx.bezierCurveTo(100, 300, 50, 200, 100, 150);
    ctx.closePath();

    ctx.moveTo(100, 150);
    ctx.lineTo(150, 50);
    ctx.lineTo(200, 150);
    ctx.lineTo(150, 250);
    ctx.lineTo(100, 150);

    ctx.lineWidth = 5;

    ctx.strokeStyle = '#ff0000';
    ctx.stroke();


    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
