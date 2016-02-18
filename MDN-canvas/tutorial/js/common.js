(function() {
    var canvas = document.getElementById('tutorial');
    var ctx;
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');

        // 1
        // ctx.fillStyle = 'rgb(200,0,0)';
        // ctx.fillRect(10, 10, 55, 50);

        // ctx.fillStyle = 'rgba(0,0,200,0.5)';
        // ctx.fillRect(30, 30, 55, 50);

        // 2
        // ctx.fillRect(25, 25, 100, 100);
        // ctx.clearRect(45, 45, 60, 60);
        // ctx.strokeRect(50, 50, 50, 50);

        // 3
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.fill();
        // ctx.stroke();
    }
})();
