(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    var img = new Image();
    img.src = './images/1.jpg';

    img.onload = function() {
        ctx.drawImage(img, 10, 10);
        ctx.drawImage(img, 260, 10, 100, 100);
        ctx.drawImage(img, 50, 50, 100, 100, 260, 130, 100, 100);
    }

    // drawImage(image,dx,dy);
    // drawImage(image,dx,dy,dw,dh);
    // drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh);

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
