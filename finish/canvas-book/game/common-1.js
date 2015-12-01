(function(i) {
    function id(str) {
        return document.getElementById(str);
    }

    var canvas = id('canvas' + i);
    var context = canvas.getContext('2d');

    var canvasW = canvas.width;
    var canvasH = canvas.height;

    var ui = id('game-ui');
    var info = id('game-info');
    var state = id('game-state');
    var complete = id('game-complete');
    var play = id('game-play');
    var reset = document.querySelectorAll('.reset');
    var remain = id('game-remain');
    var score = document.querySelectorAll('.game-score');

    var playGame;
    var platformX, platformY, platformOuterRadius, platformInnerRadius;

    var asteroids;

    var player, playerOriginalX, playerOriginalY;

    var Asteroids = function(x, y, radius, mass, friction) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.mass = mass;
        this.friction = friction;
        this.vX = 0;
        this.vY = 0;
        this.player = false;
    }



    function startGame() {
        for (var i = 0; i < score.length; i++) {
            score[i].innerHTML = '0';
            state.style.display = 'block';
        }
        playGame = false;

        platformX = canvasW / 2;
        platformY = 150;
        platformOuterRadius = 100;
        platformInnerRadius = 75;

        asteroids = [];

        var outerRing = 8;
        var ringCount = 3;
        var ringSpacing = (platformInnerRadius / (ringCount - 1));
        for (var r = 0; r < ringCount; r++) {
            var curRing = 0;
            var angle = 0;
            var ringRadius = 0;

            if (r == ringCount - 1) {
                curRing = 1;
            } else {
                curRing = outerRing - (r * 3);
                angle = 360 / curRing;
                ringRadius = platformInnerRadius - (ringSpacing * r);
            }

            for (var a = 0; a < curRing; a++) {
                var x = 0;
                var y = 0;
                if (r == ringCount - 1) {
                    x = platformX;
                    y = platformY;
                } else {
                    x = platformX + (ringRadius * Math.cos((angle * a) * (Math.PI / 180)));
                    y = platformY + (ringRadius * Math.sin((angle * a) * (Math.PI / 180)));
                }

                var radius = 10;
                var mass = 5;
                var friction = 0.95;
                asteroids.push(new Asteroids(x, y, radius, mass, friction));
            }
        }

        var pRadius = 15;
        var pMass = 10;
        var pFriction = 0.97;
        playerOriginalX = canvasW / 2;
        playerOriginalY = canvasH - 150;

        player = new Asteroids(playerOriginalX, playerOriginalY, pRadius, pMass, pFriction);
        player.player = true;
        asteroids.push(player);

        remain.innerHTML = asteroids.length - 1;

        animate();
    }

    function init() {
        state.style.display = 'none';
        complete.style.display = 'none';

        play.addEventListener('click', function(e) {
            e.preventDefault();
            info.style.display = 'none';
            startGame();
        });

        for (var i = 0; i < reset.length; i++) {
            reset[i].addEventListener('click', function(e) {
                e.preventDefault();
                complete.style.display = 'none';
                startGame();
            })
        }
    }

    function animate() {
        context.clearRect(0, 0, canvasW, canvasH);
        context.fillStyle = 'rgb(100,100,100)';
        context.beginPath();
        context.arc(platformX, platformY, platformOuterRadius, 0, Math.PI * 2, true);
        context.closePath();
        context.fill();

        context.fillStyle = 'rgb(255,255,255)';
        for (i = 0; i < asteroids.length; i++) {
            var cur = asteroids[i];
            for (var j = i + 1; j < asteroids.length; j++) {
                var curB = asteroids[j];

                // 碰撞 💥
                var dx = curB.x - cur.x;
                var dy = curB.y - cur.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < cur.radius + curB.radius) {
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

                    var total = vX - vXb;
                    vX = ((cur.mass - curB.mass) * vX + 2 * curB.mass * vXb) / (cur.mass + curB.mass);

                    vXb = total + vX;

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

            if (Math.abs(cur.vX) > 0.1) {
                cur.vX *= cur.friction;
            } else {
                cur.vX = 0;
            }

            if (Math.abs(cur.vY) > 0.1) {
                cur.vY *= cur.friction;
            } else {
                cur.vY = 0;
            }

            context.beginPath();
            context.arc(cur.x, cur.y, cur.radius, 0, Math.PI * 2, true);
            context.closePath();
            context.fill();
        }

        if (playGame) {
            setTimeout(animate, 33);
        }
    }

    init();
})(1);
