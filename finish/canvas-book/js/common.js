(function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.fillRect(150, 150, 100, 100);
    context.translate(150, 150);
    context.fillStyle = 'skyblue';
    context.fillRect(150, 150, 100, 100);

    var canvas2 = document.getElementById('canvas-2');
    var context2 = canvas2.getContext('2d');

    context2.fillRect(150, 150, 50, 50);
    context2.scale(2, 2);
    context2.fillStyle = 'skyblue';
    context2.fillRect(150, 150, 50, 50);

    var canvas3 = document.getElementById('canvas-3');
    var context3 = canvas3.getContext('2d');

    context3.fillRect(150, 150, 50, 50);
    context.save();
    context3.translate(150, 150);
    context3.scale(2, 2);
    context3.fillStyle = 'skyblue';
    context3.fillRect(0, 0, 50, 50);
    context3.restore();
    // context3.fillRect(0, 0, 100, 100);


    var canvas4 = document.getElementById('canvas-4');
    var context4 = canvas4.getContext('2d');

    context4.translate(200, 200);
    context4.rotate(Math.PI / 2);
    context4.fillRect(-50, -50, 100, 100);

    var canvas5 = document.getElementById('canvas-5');
    var context5 = canvas5.getContext('2d');

    context5.transform(2, 0, 0, 2, 0, 0);
    context5.fillRect(0, 0, 100, 100);

    var canvas6 = document.getElementById('canvas-6');
    var context6 = canvas6.getContext('2d');

    context6.setTransform(1, 0, 0, 1, 0, 0);
    var xScale = Math.cos(0.7584);
    var ySkew = -Math.sin(0.7584);
    var xSkew = Math.sin(0.7584);
    var yScale = Math.cos(0.7584);
    var xTrans = 200;
    var yTrans = 200;

    context6.transform(xScale, ySkew, xSkew, yScale, xTrans, yTrans);
    context6.fillRect(-50, -50, 100, 100);
})();
