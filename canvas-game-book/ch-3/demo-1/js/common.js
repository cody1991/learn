(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.strokeRect(10, 10, 150, 100);
    ctx.restore();

    ctx.save();
    ctx.scale(3, 3);
    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.strokeRect(10, 10, 150, 100);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.strokeRect(300, 300, 150, 100);
    ctx.restore();


    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
