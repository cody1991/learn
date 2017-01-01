(function() {
    var reqAnimationFrame = (function() {
        return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    var screen = document.querySelector('.device-screen'),
        el = document.querySelector('#hitarea');

    console.log(screen.offsetWidth)

    var START_X = Math.round((screen.offsetWidth - el.offsetWidth) / 2),
        START_Y = Math.round((screen.offsetHeight - el.offsetHeight) / 2);

    var ticking = false,
        transform,
        timer;

    var mc = new Hammer.Manager(el);

    mc.add(new Hammer.Pan({
        threshold: 0,
        pointers: 0
    }));

    mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));

    mc.add(new Hammer.Rotate({
        threshold: 0
    })).recognizeWith(mc.get('pan'));

    mc.add(new Hammer.Pinch({
        threshold: 0
    })).recognizeWith([mc.get('pan'), mc.get('rotate')]);

    mc.add(new Hammer.Tap({
        event: 'doubletap',
        taps: 2
    }));

    function resetElement() {
        el.className = 'animate';
        transform = {
            translate: {
                x: START_X,
                y: START_Y
            },
            scale: 1,
            angle: 0,
            rx: 0,
            ry: 0,
            rz: 0
        };
        requestElementUpdate();
    }

    function requestElementUpdate() {
        if (!ticking) {
            reqAnimationFrame(updateElementTransform);
            ticking = true;
        }
    }

    function updateElementTransform() {
        var value = ['translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)', 'scale(' + transform.scale + ', ' + transform.scale + ')', 'rotate3d(' + transform.rx + ',' + transform.ry + ',' + transform.rz + ',' + transform.angle + 'deg)'];

        value = value.join(" ");

        console.log(value)
        el.style.webkitTransform = value;
        el.style.mozTrasform = value;
        el.style.transform = value;
        ticking = false;
    }

    mc.add(new Hammer.Tap());

    mc.on('panstart panmove', onPan);
    mc.on('panend', onPanEnd);
    mc.on('rotatestart rotatemove', onRotate);
    mc.on('pinchstart pinchmove', onPinch);
    mc.on('swipe', onSwipe);
    mc.on('tap', onTap);
    mc.on('doubletap', onDoubleTap);


    // mc.on('hammer.input', function(ev) {
    //     if (ev.isFinal) {
    //         resetElement();
    //     }
    // });

    var initScale = 1,
        initAngle = 0;

    function onPinch(ev) {
        if (ev.type == 'pinchstart') {
            initScale = transform.scale || 1;
        }

        el.className = '';
        transform.scale = initScale * ev.scale;

        requestElementUpdate();
    }

    function onDoubleTap(ev) {
        transform.rx = 1;
        transform.angle = 80;

        clearTimeout(timer);
        timer = setTimeout(function() {
            resetElement();
        }, 500);

        requestElementUpdate();
    }

    function onTap(ev) {
        transform.rx = 1;
        transform.angle = 25;
        clearTimeout(timer);
        timer = setTimeout(function() {
            resetElement();
        }, 200);

        requestElementUpdate();
    }

    function onSwipe(ev) {
        var angle = 50;
        transform.ry = (ev.direction & Hammer.DIRECTION_HORIZONTAL) ? 1 : 0;
        transform.rx = (ev.direction & Hammer.DIRECTION_VERTICAL) ? 1 : 0;
        transform.angle = (ev.direction & Hammer.DIRECTION_RIGHT | Hammer.DIRECTION_UP) ? angle : -angle;

        clearTimeout(timer);

        timer = setTimeout(function() {
            resetElement()
        }, 300);

        requestElementUpdate();
    }

    function onRotate() {
        if (ev.type = "rotatestart") {
            initAngle = transform.angle || 0;
        }

        el.className = '';
        transform.rz = 1;
        transform.angle = initAngle + ev.rotation;

        requestElementUpdate();
    }

    function onPan(ev) {
        el.className = '';
        transform.translate = {
            x: START_X + ev.deltaX,
            y: START_Y + ev.deltaY
        }

        requestElementUpdate();
    }

    function onPanEnd(ev) {
        START_X = START_X + ev.deltaX;
        START_Y = START_Y + ev.deltaY;
    }


    resetElement();

})();
