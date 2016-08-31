(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ccc';
    ctx.fillRect(0, 0, 500, 500);

    var onoff = false,
        oldX,
        oldY;

    var lineColor = 'white';
    var linW = 4;

    document.getElementById('yellow').addEventListener('click', function() {
        lineColor = 'yellow';
    }, false);

    document.getElementById('lineW16').addEventListener('click', function() {
        linW = 16;
    }), false;

    document.getElementById('copy').addEventListener('click', function() {
        var img_png_src = canvas.toDataURL('image/png');
        document.getElementById('image_png').src = img_png_src;
    }), false;

    canvas.addEventListener('mousemove', draw, true);
    canvas.addEventListener('mousedown', down, false);
    canvas.addEventListener('mouseup', up, false);

    function down(event) {
        onoff = true;

        if (event.pageX || event.pageY) {
            oldX = event.pageX;
            oldY = event.pageY;
        } else {
            oldX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            oldY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        var Box = canvas.getBoundingClientRect();

        oldX = (oldX - Box.left) * (canvas.width / Box.width);
        oldY = (oldY - Box.top) * (canvas.height / Box.height);

    }

    function up() {
        onoff = false;
    }

    function draw(event) {
        if (onoff == true) {
            var newX,
                newY;

            if (event.pageX || event.pageY) {
                newX = event.pageX;
                newY = event.pageY;
            } else {
                newX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                newY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }

            var Box = canvas.getBoundingClientRect();

            newX = (newX - Box.left) * (canvas.width / Box.width);
            newY = (newY - Box.top) * (canvas.height / Box.height);


            ctx.beginPath();
            ctx.moveTo(oldX, oldY);
            ctx.lineTo(newX, newY);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = linW;
            ctx.lineCap = 'round';
            ctx.stroke();

            oldX = newX;
            oldY = newY;
        }
    }

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // })();
})();
