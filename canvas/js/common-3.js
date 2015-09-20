(function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(100, 50);
    context.lineTo(150, 150);
    context.lineTo(50, 150);
    context.closePath();
    context.stroke();
    context.fill();
})();

(function() {
    var canvas = document.getElementById('canvas2');
    var context = canvas.getContext('2d');

    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(50, 250);
    context.quadraticCurveTo(250, 100, 450, 250);
    context.stroke();
})();

(function() {
    var canvas = document.getElementById('canvas3');
    var context = canvas.getContext('2d');

    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(50, 250);
    context.bezierCurveTo(150, 50, 350, 450, 450, 250);
    context.stroke();
})();


(function() {
    var canvas = document.getElementById('canvas4');
    var context = canvas.getContext('2d');

    context.save();
    context.fillRect(50, 50, 100, 100);

    context.fillStyle = "rgb(255,0,0)";
    context.fillRect(100, 100, 100, 100);

    context.restore();
    context.fillRect(150, 150, 100, 100);

    var dataUrl = canvas.toDataURL();

    document.getElementById('canvasImg').src = dataUrl;
    console.log(dataUrl);

})();
