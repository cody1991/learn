(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    // globalCompositeOperation
    // source指的是将要绘制到画布上的颜色 destination指的是画布上已经存在的颜色 默认 source-over
    // copy 只绘制新的图像，删除所有其他的内容
    // darker 图片重叠的地方，颜色由两个颜色值相减后决定
    // destination-atop 画布上已经有的内容只会在它和新图形重叠的地方保留 新图形绘制在内容之后
    // destination-in 在新图形和画布上已有的图形重叠的地方，画布上已有的内容保留，所有其他内容都是透明
    // destination-out 在画布上已有内容和新图形不重叠的地方，已有内容保留，所有其他内容都是透明
    // destination-over 新图形绘制在画布上已有内容的后面
    // lighter 图形重叠的地方，颜色由两种颜色值的加值来决定
    // source-atop 只有在新图形和画布上已有内容重叠的地方才绘制新图形
    // source-in 新图形以及画布上已有内容重叠的地方才绘制新图形，所有其他内容均为透明
    // source-out 只有在和画布上已有图形不重叠的地方才绘制新图形
    // source-over 新图形绘制在画布上已有图形的顶部，默认值。
    // xor 在重叠和正常绘制的其他地方，图形都是透明的

    ctx.fillStyle = '#0f0';
    ctx.fillRect(10, 10, 50, 50);

    // ctx.globalCompositeOperation = 'source-over';
    // ctx.globalCompositeOperation = 'copy';
    // ctx.globalCompositeOperation = 'darker';
    // ctx.globalCompositeOperation = 'destination-atop';
    // ctx.globalCompositeOperation = 'destination-in';
    // ctx.globalCompositeOperation = 'destination-out';
    // ctx.globalCompositeOperation = 'destination-over';
    // ctx.globalCompositeOperation = 'lighter';
    // ctx.globalCompositeOperation = 'source-atop';
    // ctx.globalCompositeOperation = 'source-in';    
    // ctx.globalCompositeOperation = 'source-out';
    // ctx.globalCompositeOperation = 'source-over';
    ctx.globalCompositeOperation = 'xor';
    ctx.beginPath();
    ctx.fillStyle = '#f00';
    ctx.arc(50, 50, 30, 0, 2 * Math.PI);
    ctx.fill();

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
