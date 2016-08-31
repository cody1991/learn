(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    var image = new Image();
    image.src = './images/1.jpg';
    image.onload = function() {
        ctx.drawImage(image, 10, 10);
        ctx.scale(1, -1);
        ctx.drawImage(image, 250, -250);
    }

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
