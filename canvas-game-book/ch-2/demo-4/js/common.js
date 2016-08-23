(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();

    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.lineTo(70, 20);
    // 点p1的x y坐标，点p2的x y坐标，圆弧的半径
    ctx.arcTo(120, 30, 120, 70, 50);
    ctx.lineTo(120, 120);
    ctx.stroke();
})();
