// requestAnimationFrame polyfill
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
    };
}());

(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = window.innerWidth,
        height = window.innerHeight,
        moon = new Moon(ctx, width, height),
        stars = new Stars(ctx, width, height, 200);

    var count = 0;
    var meteors = [];
    var controlMeteorGen = 0;

    canvas.width = width;
    canvas.height = height;

    function meteorGenerator() {
        if (controlMeteorGen > 2000) {
            controlMeteorGen = 0;
            var x = Math.random() * width + 800;
            meteors.push(new Meteor(ctx, x, height));
        } else {
            controlMeteorGen += 60;
        }
        requestAnimationFrame(meteorGenerator);
    }

    function frame() {
        count++;
        count % 10 === 0 && stars.blink();
        moon.draw();
        stars.draw();

        meteors.forEach(function(meteor, index, arr) {
            if (meteor.flow()) {
                meteor.draw();
            } else {
                arr.splice(index, 1);
            }
        });

        requestAnimationFrame(frame);
    }


    meteorGenerator();
    frame();
})();
