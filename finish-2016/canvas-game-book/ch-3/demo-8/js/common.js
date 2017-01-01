(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');


    var image = new Image();
    image.src = './images/1.jpg';

    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 100;
    ctx.shadowOffsetX = 20;
    ctx.shadowOffsetY = 30;

    image.onload = function() {
        ctx.drawImage(image, 10, 10);

        var imgdata = ctx.getImageData(10, 10, 240, 240);
        var pixels = imgdata.data;

        for (var i = 0; n = pixels.length, i < n; i += 4) {
            var grayscale = pixels[i] * 0.3 + pixels[i + 1] * 0.59 + pixels[i + 2] * 0.11;
            pixels[i] = grayscale;

            pixels[i + 1] = grayscale;

            pixels[i + 2] = grayscale;

        }

        ctx.putImageData(imgdata, 250, 250);
    }

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
