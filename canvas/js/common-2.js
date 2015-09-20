(function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.shadowBlur = 20;
    context.shadowColor = 'rgba(0,0,0,0.5)';
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;

    context.fillStyle = 'rgb(63,169,245)';
    context.fillRect(50, 50, 100, 100);


    // context.globalCompositeOperation = 'xor';
    // context.globalCompositeOperation = 'copy';
    // context.globalCompositeOperation = 'lighter';
    context.globalCompositeOperation = 'destination-out';
    // context.globalCompositeOperation = 'source-out';
    // context.globalCompositeOperation = 'destination-in';
    // context.globalCompositeOperation = 'source-in';
    // context.globalCompositeOperation = 'destination-atop';
    // context.globalCompositeOperation = 'source-atop';
    // context.globalCompositeOperation = 'destination-over';
    // context.globalCompositeOperation = 'source-over';

    // context.globalAlpha = 0.5;
    context.fillStyle = 'rgb(255,123,172)';
    context.fillRect(100, 100, 100, 100);

    context.shadowBlur = 50;
    context.shadowColor = 'rgba(255,0,0,1)';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    context.globalCompositeOperation = 'source-over';

    context.beginPath();
    context.arc(400, 100, 50, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
})();

(function() {
    var canvas = document.getElementById('canvas2');
    var context = canvas.getContext('2d');

    var gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgb(0,0,0)');
    gradient.addColorStop(1, 'rgb(255,255,255)');

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
})();

(function() {
    var canvas = document.getElementById('canvas3');
    var context = canvas.getContext('2d');

    var gradient = context.createRadialGradient(300, 300, 10, 100, 100, 50);
    gradient.addColorStop(0, 'rgb(0,0,0)');
    gradient.addColorStop(1, 'rgb(255,255,255');

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
})();


(function() {
    var canvas = document.getElementById('canvas4');
    var context = canvas.getContext('2d');

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    var gradient = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, 250);
    gradient.addColorStop(0, 'rgb(0,0,0)');
    gradient.addColorStop(1, 'rgb(255,255,255');

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
})();
