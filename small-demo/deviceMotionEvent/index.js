    alert('修改');

    if (window.deviceMotionEvent) {
        alert('支持');
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    }

    var speed = 30;
    var x = 0,
        y = 0,
        z = 0,
        lastX = 0,
        lastY = 0,
        lastZ = 0;

    function deviceMotionHandler(e) {
        var acceleration = event.accelerationIncludingGravity;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        if (Math.abs(x - lastX) > speed || Math.abs(y - lastY) > speed || Math.abs(z - lastZ) > speed) {
            alert(1);
            // document.body.appendChild(document.createTextNode('摇一摇'));
        }

        lastX = x;
        lastY = y;
        lastZ = z;
    }
