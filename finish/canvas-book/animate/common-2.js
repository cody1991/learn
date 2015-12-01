(function(i) {
    var canvas = document.getElementById('canvas' + i);
    var context = canvas.getContext('2d');

    var Shape = function(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    var shapes = [];




    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        shapes = [];
        for (var i = 0; i < 10; i++) {
            var x = Math.random() * 250;
            var y = Math.random() * 250;
            var width = height = Math.random() * 50;
            shapes.push(new Shape(x, y, width, height));
        }

        for (var i = 0; i < shapes.length; i++) {
            var curShape = shapes[i];
            context.fillStyle = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
            context.fillRect(curShape.x, curShape.y, curShape.width, curShape.height);
        }

        setTimeout(function() {
            animate();
        }, 33);
    }

    animate();
})(1);
