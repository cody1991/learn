(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0.2, '#0f0');
    grd.addColorStop(0.8, '#f00');

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 200, 100);
    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();

    var grd2 = ctx.createRadialGradient(400, 300, 10, 400, 300, 50);
    grd2.addColorStop(0, '#0f0');
    grd2.addColorStop(1, '#f00');
    ctx.fillStyle = grd2;
    ctx.fillRect(300, 200, 200, 200);
})();
