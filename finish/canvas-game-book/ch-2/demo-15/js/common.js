(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    // putImageData(imgdata,dx,dy,sx,sy,sw,sh);
    // dx,dy是绘制图片的定位坐标值，sx,sy是imgdata所绘制的起始位置，sw,sh是imgdata绘制区域的宽度和高度，后面四个可以省略，绘制整个imgdata

    // getImageData(x,y,w,h) 起始位置和宽高

    var img = new Image();
    img.src = './images/1.jpg';
    img.onload = function() {
        ctx.drawImage(img, 10, 10);

        var imgData = ctx.getImageData(50, 50, 200, 200);

        ctx.putImageData(imgData, 10, 260);
        ctx.putImageData(imgData, 200, 260, 50, 50, 100, 100);
    }

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
