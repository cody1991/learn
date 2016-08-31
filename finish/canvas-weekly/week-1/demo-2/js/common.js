(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    var w, h;

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

    var clearColor = 'rgba(0,0,0,0.1)',
        wordColor = '#33ff33',
        words = "0123456789qwertyuiopasdfghjklzxcvbnm,./;'\[]QWERTYUIOP{}ASDFGHJHJKL:ZXCVBBNM<>?",
        wordsArr = words.split(''),
        font_size = 16,
        columns = w / font_size,
        drops = [];

    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        context.save();

        context.fillStyle = wordColor;
        context.font = font_size + 'px arial';

        for (var i = 0; i < drops.length; i++) {
            var text = wordsArr[Math.floor(Math.random() * wordsArr.length)];
            context.fillText(text, i * font_size, drops[i] * font_size);
            if (drops[i] * font_size > h && Math.random() > 0.98) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        context.restore();
    }



    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.fillStyle = clearColor;
        context.fillRect(0, 0, w, h);
        // 在初始化部分，我们定义了一个变量clearColor = 'rgba(0, 0, 0, .1)',用处就和注释一样，用于绘制阴影，它的主要用处在动画循环部分。原理可以这样理解：我们每画新的一帧，就在上面覆盖一个透明度为0.1的矩形模块，这样就形成了我们看到的阴影，是不是很简单呢？

        draw();
    }());

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
})();
