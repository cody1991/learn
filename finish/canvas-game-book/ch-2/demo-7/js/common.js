(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.quadraticCurveTo(20, 50, 200, 20);
    ctx.stroke();
    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
