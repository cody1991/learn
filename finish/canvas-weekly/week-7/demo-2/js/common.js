(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var ship = new Ship();
    ship.x = centerX;
    ship.y = centerY;

    var vr = 0,
        vx = 0,
        vy = 0,
        ax = 0,
        ay = 0,
        angle = 0,
        speed = 0,
        f = 0.97,
        isGoing = true;

    window.addEventListener('keydown', function(event) {
        switch (event.keyCode) {
            case 37:
                vr = -3;
                break;
            case 39:
                vr = 3;
                break;
            case 38:
                ship.showFlame = true;
                speed = 0.5;
                isGoing = true;
                break;
        }
    }, false);

    window.addEventListener('keyup', function(event) {
        if (isGoing && event.keyCode == 38) {
            speed = 0;
            ship.showFlame = false;
            isGoing = false;
        } else {
            vr = 0;
        }
    }, false);

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        ship.rotation += vr * Math.PI / 180;

        angle = ship.rotation;

        ax = Math.cos(angle) * speed;
        ay = Math.sin(angle) * speed;

        vx += ax;
        vy += ay;

        vx *= f;
        vy *= f;

        ship.x += vx;
        ship.y += vy;

        if (ship.x + ship.width / 2 > canvasW) {
            ship.x = canvasW - ship.width;
            vx *= -1;
        } else if (ship.x < ship.width / 2) {
            ship.x = ship.width / 2;
            vx *= -1;
        }
        if (ship.y + ship.height / 2 > canvasH) {
            ship.y = canvasH - ship.height / 2;
            vy *= -1;
        } else if (ship.y < ship.height / 2) {
            ship.y = ship.height / 2;
            vy *= -1;
        }


        ship.draw(context);
    })();
})();
