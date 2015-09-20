(function(i) {
    var canvas = document.getElementById('canvas' + i);
    var context = canvas.getContext('2d');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var playAnimation = true;

    start.addEventListener('click', function() {
        if (playAnimation) {
            return;
        }
        playAnimation = true;
        animate();
    });

    stop.addEventListener('click', function() {
        if (!playAnimation) {
            return;
        }
        playAnimation = false;
    })

    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    var Shape = function(x, y) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.radius = Math.random() * 30;
        this.angle = 0;
    }

    var shapes = [];

    for (var i = 0; i < 10; i++) {
        var x = Math.random() * 250;
        var y = Math.random() * 250;
        var width = Math.random() * 30;
        var height = Math.random() * 30;
        shapes.push(new Shape(x, y, width, height));
    }

    console.log(shapes)


    function animate() {

        if (playAnimation) {
            console.log('playing');
            context.clearRect(0, 0, canvasWidth, canvasHeight);

            for (var i = 0; i < shapes.length; i++) {
                var curShape = shapes[i];


                var x = curShape.x + (curShape.radius * Math.cos(curShape.angle * (Math.PI / 180)));
                var y = curShape.y + (curShape.radius * Math.sin(curShape.angle * (Math.PI / 180)));

                curShape.angle += 5;
                if (curShape.angle > 360) {
                    curShape.angle = 0;
                }
                context.fillStyle = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';

                context.fillRect(x, y, curShape.width, curShape.height);
            }

            setTimeout(animate, 33);
        }
    }

    animate();
})(1);
