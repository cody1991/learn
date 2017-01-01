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
    }

    var shapes = new Array();

    shapes.push(new Shape(50, 50));
    shapes.push(new Shape(100, 100));
    shapes.push(new Shape(150, 150));

    console.log(shapes);


    function animate() {

        if (playAnimation) {
            console.log('playing');
            context.clearRect(0, 0, canvasWidth, canvasHeight);

            for (var i = 0; i < shapes.length; i++) {
                var curShape = shapes[i];
                curShape.x++;
                context.fillRect(curShape.x, curShape.y, 10, 10);
            }

            setTimeout(animate, 33);
        }
    }

    animate();
})(1);
