(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    var img = new Image();

    var particles = [];

    var imageData,
        imageX,
        imageY;

    img.onload = function() {
        imageX = parseInt(canvas.width / 2 - img.width / 2);
        imageY = 200;

        context.drawImage(img, imageX, imageY, img.width, img.height);

        imageData = context.getImageData(imageX, imageY, img.width, img.height);

        console.log(imageData);

        calculate();

        draw();
    }

    img.src = './images/isux.png';

    function calculate() {
        var len = imageData.length;

        var cols = 100,
            rows = 100;

        var s_width = parseInt(img.width / cols),
            s_height = parseInt(img.height / rows);

        var pos = 0;
        var par_x, par_y;

        var data = imageData.data;

        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                pos = (j * s_height * img.width + i * s_width) * 4;
                if (data[pos + 3] > 100) {
                    var particle = {
                        x: img.width + i * s_width + (Math.random() - 0.5) * 20,
                        y: img.height + j * s_height + (Math.random() - 0.5) * 20
                    }
                    if (data[pos + 1] < 175 && data[pos + 2] < 10) {
                        particle.fillStyle = '#ffa900';
                    } else if (data[pos + 1] < 75 && data[pos + 1] > 50) {
                        particle.fillStyle = '#ff4085';
                    } else if (data[pos + 1] < 220 && data[pos + 1] > 190) {
                        particle.fillStyle = '#00cfff';
                    } else if (data[pos + 1] < 195 && data[pos + 1] > 175) {
                        particle.fillStyle = '#9abc1c';
                    }
                    particles.push(particle);
                }
            }
        }
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        var len = particles.length;
        var curr_particle = null;
        for (var i = 0; i < len; i++) {
            curr_particle = particles[i];
            context.fillStyle = curr_particle.fillStyle;
            context.fillRect(curr_particle.x, curr_particle.y, 1, 1);
        }
    }

    // !(function drawFrame() {
    //     window.requestAnimationFrame(drawFrame, canvas);
    //     context.clearRect(0, 0, canvasW, canvasH);
    // })();
})();
