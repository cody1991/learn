(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.arc(100, 100, 70, 0, 130 * Math.PI / 180, true);
    ctx.stroke();

    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(200, 200, 70, 0, 130 * Math.PI / 180, true);
    ctx.fill();

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(300, 300, 70, 0, 360 * Math.PI / 180, true);
    ctx.fill();

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
