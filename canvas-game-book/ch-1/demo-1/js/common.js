(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     context.clearRect(0, 0, canvas.width, canvas.height);
    // })();

    context.fillStyle = '#ff0000';
    context.fillRect(0, 0, 150, 75);
})();
