(function(i) {
    var canvas = document.getElementById('canvas' + i);
    var context = canvas.getContext('2d');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var playAnimation = true;


    window.addEventListener('resize', resizeCanvas);

    var canvasW, canvasH;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvasW = canvas.width;
        canvasH = canvas.height;
    }

    resizeCanvas();


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
    });

    var Asteroid = function(x, y, radius, vX, vY, color, aX, aY, mass) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vX = vX;
        this.vY = vY;
        this.color = color;
        // this.aX = aX;
        // this.aY = aY;
        this.aX = 0;
        this.aY = 0;

        this.mass = mass;
    }

    var asteroids = [];
    var length = 40;

    for (var i = 0; i < length; i++) {
        var x = 20 + (Math.random() * (canvasW - 40));
        var y = 20 + (Math.random() * (canvasH - 40));
        var radius = 5 + Math.random() * 10;
        var vX = Math.random() * 7 - 2;
        var vY = Math.random() * 7 - 2;
        var color = 'rgb(' + random0to255() + ',' + random0to255() + ',' + random0to255() + ')';
        var aX = Math.random() * 0.2 - 0.1;
        var aY = Math.random() * 0.2 - 0.1;

        var mass = radius / 2;

        asteroids.push(new Asteroid(x, y, radius, vX, vY, color, aX, aY, mass));
    }


    function random0to255() {
        return Math.floor(Math.random() * 255);
    }

    function animate() {
        if (playAnimation) {

            context.clearRect(0, 0, canvasW, canvasH);

            for (var i = 0; i < length; i++) {
                var cur = asteroids[i];

                for (var j = i + 1; j < length; j++) {
                    var curB = asteroids[j];
                    var dx = curB.x - cur.x;
                    var dy = curB.y - cur.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < curB.radius + cur.radius) {
                        console.log(i + '和' + j + '相碰了！');

                        var angle = Math.atan2(dy, dx);
                        var sin = Math.sin(angle);
                        var cos = Math.cos(angle);

                        var x = 0;
                        var y = 0;
                        var xB = dx * cos + dy * sin;
                        var yB = dy * cos - dx * sin;

                        var vX = cur.vX * cos + cur.vY * sin;
                        var vY = cur.vY * cos - cur.vX * sin;

                        var vXb = curB.vX * cos + curB.vY * sin;
                        var vYb = curB.vY * cos - curB.vX * sin;

                        // vX *= -1;
                        // vXb *= -1;

                        var vTotal = vX - vXb;
                        vX = ((cur.mass - curB.mass) * vX + 2 * curB.mass * vXb) / (cur.mass + curB.mass);
                        vXb = vTotal + vX;

                        xB = x + (cur.radius + curB.radius);

                        cur.x = cur.x + (x * cos - y * sin);
                        cur.y = cur.y + (y * cos + x * sin);

                        curB.x = cur.x + (xB * cos - yB * sin);
                        curB.y = cur.y + (yB * cos + xB * sin);

                        cur.vX = vX * cos - vY * sin;
                        cur.vY = vY * cos + vX * sin;

                        curB.vX = vXb * cos - vYb * sin;
                        curB.vY = vYb * cos + vXb * sin;
                    }
                }


                cur.x += cur.vX;
                cur.y += cur.vY;

                if (Math.abs(cur.vX) < 10) {
                    cur.vX += cur.aX;
                }
                if (Math.abs(cur.vY) < 10) {
                    cur.vY += cur.aY;
                }

                // if (Math.abs(cur.vX) > 0.1) {
                //     cur.vX *= 0.9;
                // } else {
                //     cur.vX = 0;
                // }

                // if (Math.abs(cur.vY) > 0.1) {
                //     cur.vY *= 0.9;
                // } else {
                //     cur.vY = 0;
                // }

                if (cur.x - cur.radius < 0) {
                    cur.x = cur.radius;
                    cur.vX *= -1;
                    cur.aX *= -1;
                } else if (cur.x + cur.radius > canvasW) {
                    cur.x = canvasW - cur.radius;
                    cur.vX *= -1;
                    cur.aX *= -1;
                }

                if (cur.y - cur.radius < 0) {
                    cur.y = cur.radius;
                    cur.vY *= -1;
                    cur.aY *= -1;
                } else if (cur.y + cur.radius > canvasH) {
                    cur.y = canvasH - cur.radius;
                    cur.vY *= -1;
                    cur.aY *= -1;
                }

                context.beginPath();
                context.fillStyle = cur.color;
                context.arc(cur.x, cur.y, cur.radius, 0, Math.PI * 2, false);
                context.closePath();
                context.fill();
            }

            setTimeout(animate, 33);
        }
    }

    animate();

})(1);
