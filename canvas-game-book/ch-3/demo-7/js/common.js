(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');


    var image = new Image();
    image.src = './images/1.jpg';

    image.onload = function() {
        ctx.drawImage(image, 10, 10);

        var imgdata = ctx.getImageData(10, 10, 240, 240);
        var pixels = imgdata.data;

        for (var i = 0; n = pixels.length, i < n; i += 4) {
            pixels[i] = 255 - pixels[i];

            pixels[i + 1] = 255 - pixels[i + 1];

            pixels[i + 2] = 255 - pixels[i + 2];

        }

        ctx.putImageData(imgdata, 250, 10);
    }

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
