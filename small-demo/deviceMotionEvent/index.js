if (window.deviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
}

// var speed = 30;//speed
//         var x = y = z = lastX = lastY = lastZ = 0;
//         function deviceMotionHandler(eventData) {  
//           var acceleration =event.accelerationIncludingGravity;
//                 x = acceleration.x;
//                 y = acceleration.y;
//                 z = acceleration.z;
//                 if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed) {
//                     //简单的摇一摇触发代码
//                     alert(1);
//                 }
//                 lastX = x;
//                 lastY = y;
//                 lastZ = z;
//         }

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
        document.body.appendChild(document.createTextNode('摇一摇'));
    }

    lastX = x;
    lastY = y;
    lastZ = z;
}
