(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    // createImageData(sw,sh);
    // 返回指定大小的imageData对象

    // createImageData(imagedata)
    // 返回指定对象相同大小的imageData对象

    var image = new Image();
    image.src = './images/1.jpg';
    image.onload = function() {
        ctx.drawImage(image, 10, 10);

        var imgData = ctx.getImageData(50, 50, 200, 200);

        var imgData01 = ctx.createImageData(imgData);
        for (i = 0; i < imgData01.width * imgData01.height * 4; i += 4) {
            imgData01.data[i + 0] = 255;
            imgData01.data[i + 1] = 0;
            imgData01.data[i + 2] = 0;
            imgData01.data[i + 3] = 255;
        }

        ctx.putImageData(imgData01, 10, 260);

        var imgData02 = ctx.createImageData(100, 100);
        for (i = 0; i < imgData02.width * imgData02.height * 4; i += 4) {
            imgData02.data[i + 0] = 255;
            imgData02.data[i + 1] = 0;
            imgData02.data[i + 2] = 0;
            imgData02.data[i + 3] = 155;
        }

        ctx.putImageData(imgData02, 220, 260);
    }

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
