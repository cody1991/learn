(function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    ctx.lineWidth = 5;
    ctx.strokeStyle = '#000';
    ctx.beginPath();

    ctx.moveTo(10, 10);
    ctx.lineTo(10, 50);
    ctx.lineTo(150,200);
    ctx.moveTo(101,10);
    ctx.lineTo(101,50);

    ctx.closePath();
    ctx.stroke();
})();
