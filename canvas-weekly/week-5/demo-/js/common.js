(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);
    })();
})();
