(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    var rad = Math.PI * 2 / 100, // 把260分成100份，每一份就是rad角度
        speed = 0.1; // 加载的快慢调节

    function whiteCircle() {
        context.save();

        context.beginPath();
        context.strokeStyle = 'white';
        context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();

        context.restore();
    }

    function text(n) {
        context.save();

        context.strokeStyle = '#49f';
        context.font = '40px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.strokeText(n.toFixed(0) + '%', centerX, centerY);
        context.stroke();

        context.restore();
    }

    function blueCircle(n) {
        context.save();

        context.strokeStyle = '#49f';
        context.lineWidth = 5;
        context.beginPath();

        context.arc(centerX, centerY, 100, -Math.PI / 2, -Math.PI / 2 + n * rad, false);
        context.stroke();
        context.closePath();

        context.restore();
    }

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame);

        context.clearRect(0, 0, canvas.width, canvas.height);
        whiteCircle(); // 画出圆圈。

        text(speed);

        blueCircle(speed);

        if (speed > 100) speed = 0;
        speed += 0.1;

    }());
})();
