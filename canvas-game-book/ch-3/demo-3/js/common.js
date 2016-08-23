(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.strokeRect(10, 10, 150, 100);

    ctx.translate(50, 100);
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.strokeRect(10, 10, 150, 100);

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
