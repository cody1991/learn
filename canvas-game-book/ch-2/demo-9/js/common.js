(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(100, 100, 40, 0, 360 * Math.PI / 180, true);
    ctx.clip();

    ctx.beginPath();
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, 300, 130);

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.fillRect(100, 100, 30, 40);

    ctx.fill();

    // 我们花了一个矩形，但是最后没有矩形。首先回执了一个圆，clip函数把当前圆作为回执区域。之后出现的图像只能在这个区域内。

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
