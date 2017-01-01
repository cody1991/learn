(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.textBaseline = 'alphabetic';
    ctx.font = '30px Arial';
    ctx.fillText('Hello World', 50, 50);
    ctx.moveTo(0, 50);
    ctx.lineTo(250, 50);
    ctx.stroke();

    ctx.textBaseline = 'bottom';
    ctx.font = '30px Arial';
    ctx.fillText('Hello World', 50, 100);
    ctx.moveTo(0, 100);
    ctx.lineTo(250, 100);
    ctx.stroke();

    ctx.textBaseline = 'hanging';
    ctx.font = '30px Arial';
    ctx.fillText('Hello World', 50, 150);
    ctx.moveTo(0, 150);
    ctx.lineTo(250, 150);
    ctx.stroke();

    ctx.textBaseline = 'ideographic';
    ctx.font = '30px Arial';
    ctx.fillText('Hello World', 50, 200);
    ctx.moveTo(0, 200);
    ctx.lineTo(250, 200);
    ctx.stroke();

    ctx.textBaseline = 'middle';
    ctx.font = '30px Arial';
    ctx.fillText('Hello World', 50, 250);
    ctx.moveTo(0, 250);
    ctx.lineTo(250, 250);
    ctx.stroke();

    ctx.textBaseline = 'top';
    ctx.font = '30px Arial';
    ctx.fillText('Hello World', 50, 300);
    ctx.moveTo(0, 300);
    ctx.lineTo(250, 300);
    ctx.stroke();
    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
