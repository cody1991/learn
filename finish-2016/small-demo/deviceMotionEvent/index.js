if (window.DeviceMotionEvent) {
    alert('支持');
    window.addEventListener('devicemotion', deviceMotionHandler, false);
}


var threshold = 1000,
    preX = 0,
    preY = 0,
    preZ = 0,
    x = 0,
    y = 0,
    z = 0,
    preTime = 0;

function deviceMotionHandler(e) {
    var acceleration = event.accelerationIncludingGravity;
    var curTime = new Date().getTime();
    var diffTime = curTime - preTime;

    if (diffTime > 100) {
        preTime = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;

        var accelerationDiff = Math.abs(x + y + z - preY - preY - preZ) / diffTime * 10000;

        if (accelerationDiff > threshold) {
            document.body.appendChild(document.createTextNode('摇一摇'));

        }

        preX = x;
        preY = y;
        preZ = z;
    }

}
