(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'red';
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.strokeRect(10, 10, 70, 40);


    ctx.beginPath();
    ctx.rect(100, 100, 70, 40);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillRect(200, 200, 70, 40);

    ctx.beginPath();
    ctx.rect(300, 300, 70, 40);
    ctx.fill();


    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
