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
        this.height = 10;
        this.width = 10;
        this.reverseX = false;
        this.reverseY = true;
    }

    var shapes = new Array();

    shapes.push(new Shape(230, 50));
    shapes.push(new Shape(120, 10));
    shapes.push(new Shape(170, 150));
    shapes.push(new Shape(40, 150));
    shapes.push(new Shape(30, 130));

    console.log(shapes);


    function animate() {

        if (playAnimation) {
            console.log('playing');
            context.clearRect(0, 0, canvasWidth, canvasHeight);

            for (var i = 0; i < shapes.length; i++) {
                var curShape = shapes[i];

                if (curShape.x < 0) {
                    curShape.reverseX = false;
                } else if (curShape.x + curShape.width > canvasWidth) {
                    curShape.reverseX = true;
                }

                if (curShape.y < 0) {
                    curShape.reverseY = false;
                } else if (curShape.y + curShape.height > canvasHeight) {
                    curShape.reverseY = true;
                }

                if (curShape.reverseX) {
                    curShape.x -= 2;
                } else {
                    curShape.x += 2;
                }

                if (curShape.reverseY) {
                    curShape.y -= 2;
                } else {
                    curShape.y += 2;
                }


                context.fillRect(curShape.x, curShape.y, 10, 10);
            }

            setTimeout(animate, 33);
        }
    }

    animate();
})(1);
