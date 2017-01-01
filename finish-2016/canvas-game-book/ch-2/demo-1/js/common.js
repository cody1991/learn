(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    context.lineWidth = 10;
    context.strokeStyle = 'red';

    context.lineCap = 'butt';
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(150, 10);
    context.stroke();

    context.lineCap = 'round';
    context.beginPath();
    context.moveTo(10, 40);
    context.lineTo(150, 40);
    context.stroke();

    context.lineCap = 'square';
    context.beginPath();
    context.moveTo(10, 70);
    context.lineTo(150, 70);
    context.stroke();

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     context.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
