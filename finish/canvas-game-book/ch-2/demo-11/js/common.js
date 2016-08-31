(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    // textAlign是水平方向对齐，center end left right start
    // textBaseline是竖直方向对齐，alphabetic bottom hanging ideographic middle top

    ctx.font = 'italic bold 30px Arial';
    ctx.beginPath();
    ctx.fillText('Hello World', 100, 50);

    ctx.font = '900 50px Times New Roman';
    ctx.beginPath();
    ctx.strokeText('Hello World', 100, 150);

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
