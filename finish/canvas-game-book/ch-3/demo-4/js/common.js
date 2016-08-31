(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.strokeRect(200, 50, 100, 50);

    ctx.translate(250, 75);
    ctx.rotate(45 * Math.PI / 180);
    ctx.translate(-250, -75);
    ctx.beginPath();
    ctx.strokeStyle = '#ff0000';
    ctx.strokeRect(200, 50, 100, 50);

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
