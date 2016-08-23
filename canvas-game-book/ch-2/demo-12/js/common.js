(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.moveTo(160, 0);
    ctx.lineTo(160, 320);
    ctx.stroke();

    ctx.beginPath();
    ctx.textAlign = 'start';
    ctx.font = '30px Arial';
    ctx.fillText('Hello World', 160, 50);

    ctx.beginPath();
    ctx.textAlign = 'end';
    ctx.fillText('Hello World', 160, 100);

    ctx.beginPath();
    ctx.textAlign = 'left';
    ctx.fillText('Hello World', 160, 150);

    ctx.beginPath();
    ctx.textAlign = 'center';
    ctx.fillText('Hello World', 160, 200);

    ctx.beginPath();
    ctx.textAlign = 'right';
    ctx.fillText('Hello World', 160, 250);

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
