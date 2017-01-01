(function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.shadowBlur = 20;
    context.shadowColor = 'rgb(0,0,0)';
    context.translate(100, 100);
    context.rotate(0.7854);

    var image = new Image();
    image.src = './images/1.jpg';
    image.onload = function() {
        context.drawImage(image, 10, 10, 300, 300);
    }

})();

(function() {
    var canvas = document.getElementById('canvas2');
    var context = canvas.getContext('2d');
    var image = new Image();
    image.src = './images/1.jpg';
    image.onload = function() {
        context.drawImage(image, 0, 0, 250, 250, 0, 0, 250, 250);
    }
})();

(function() {
    var canvas = document.getElementById('canvas3');
    var context = canvas.getContext('2d');
    var image = new Image();
    image.src = './images/1.jpg';
    image.onload = function() {
        context.drawImage(image, 0, 0, 250, 250, 0, 0, 500, 500);
    }
})();


(function() {
    var canvas = document.getElementById('canvas4');
    var context = canvas.getContext('2d');

    var image = new Image();
    image.src = './images/1.jpg';
    image.onload = function() {
        context.translate(50, 50)
        context.drawImage(image, 0, 0, 500, 500, 0, 0, 200, 200);
        // 重置
        context.setTransform(1, 0, 0, 1, 0, 0);

        context.translate(50, 450);
        context.scale(1, -1);
        context.drawImage(image, 0, 0, 500, 500, 0, 0, 200, 200);

        context.setTransform(1, 0, 0, 1, 0, 0);

        context.translate(450, 450);
        context.scale(-1, -1);
        context.drawImage(image, 0, 0, 500, 500, 0, 0, 200, 200);

        context.setTransform(1, 0, 0, 1, 0, 0);

        context.translate(450, 50);
        context.scale(-1, 1);
        context.drawImage(image, 0, 0, 500, 500, 0, 0, 200, 200);

        var imageData = context.getImageData(50, 50, 450, 450);
        var pixel = imageData.data;
        var red = pixel[0];
        var green = pixel[0];
        var blue = pixel[0];
        var alpha = pixel[0];

        console.log(red, green, blue, alpha);
    }

})();


function offsetTop(elements) {
    var top = elements.offsetTop;
    var parent = elements.offsetParent;
    while (parent != null) {
        top += parent.offsetTop;
        parent = parent.offsetParent;
    };
    return top;
};

function offsetLeft(elements) {
    var left = elements.offsetLeft;
    var parent = elements.offsetParent;
    while (parent != null) {
        left += parent.offsetLeft;
        parent = parent.offsetParent;
    };
    return left;
};

(function() {
    var canvas = document.getElementById('canvas5');
    var context = canvas.getContext('2d');
    var image = new Image();
    image.src = './images/1.jpg';
    image.onload = function() {
        context.drawImage(image, 0, 0, 500, 500);
    }
    canvas.addEventListener('click', function(e) {
        var canvasOffsetTop = offsetTop(canvas);
        var canvasOffsetLeft = offsetLeft(canvas);

        var canvasX = Math.floor(e.pageX - canvasOffsetLeft);
        var canvasY = Math.floor(e.pageY - canvasOffsetTop);

        var imageData = context.getImageData(canvasX, canvasY, 1, 1);
        var pixel = imageData.data;
        var pixelColor = "rgba(" + pixel[0] + "," + pixel[1] + "," + pixel[2] + "," + pixel[3] + ")";

        document.body.style.backgroundColor = pixelColor;
    });
})();

(function() {
    var canvas = document.getElementById('canvas6');
    var context = canvas.getContext('2d');

    var imageData = context.createImageData(200, 200);
    var pixels = imageData.data;

    var numPixels = imageData.width * imageData.height;
    for (var i = 0; i < numPixels; i++) {
        pixels[i * 4] = 255;
        pixels[i * 4 + 1] = 0;
        pixels[i * 4 + 2] = 0;
        pixels[i * 4 + 3] = 255;
    }

    context.putImageData(imageData, 0, 0);
})();

(function() {
    var canvas = document.getElementById('canvas7');
    var context = canvas.getContext('2d');

    var imageData = context.createImageData(200, 200);
    var pixels = imageData.data;

    var numPixels = imageData.width * imageData.height;
    for (var i = 0; i < numPixels; i++) {
        pixels[i * 4] = Math.floor(Math.random() * 255);
        pixels[i * 4 + 1] = Math.floor(Math.random() * 255);
        pixels[i * 4 + 2] = Math.floor(Math.random() * 255);
        pixels[i * 4 + 3] = Math.floor(Math.random() * 255);
    }

    context.putImageData(imageData, 0, 0);
})();


(function() {
    var canvas = document.getElementById('canvas8');
    var context = canvas.getContext('2d');

    var imageData = context.createImageData(500, 500);
    var pixels = imageData.data;

    var numTitleRows = 4;
    var numTitleCols = 4;

    var titleWidth = imageData.width / numTitleCols;
    var titleHeight = imageData.height / numTitleRows;

    for (var r = 0; r < numTitleRows; r++) {
        for (var c = 0; c < numTitleCols; c++) {
            var red = Math.floor(Math.random() * 255);
            var green = Math.floor(Math.random() * 255);
            var blue = Math.floor(Math.random() * 255);
            for (var tr = 0; tr < titleHeight; tr++) {
                for (var tc = 0; tc < titleWidth; tc++) {
                    var trueX = (c * titleWidth) + tc;
                    var trueY = (r * titleHeight) + tr;
                    var pos = (trueY * (imageData.width * 4)) + (trueX * 4);
                    pixels[pos] = red;
                    pixels[pos + 1] = green;
                    pixels[pos + 2] = blue;
                    pixels[pos + 3] = 255;
                }
            }
        }
    }
    context.putImageData(imageData, 0, 0);
})();


(function() {
    var canvas = document.getElementById('canvas9');
    var context = canvas.getContext('2d');

    var imageData = context.createImageData(500, 500);
    var pixels = imageData.data;

    var numTitleRows = 20;
    var numTitleCols = 20;

    var titleWidth = imageData.width / numTitleCols;
    var titleHeight = imageData.height / numTitleRows;

    for (var r = 0; r < numTitleRows; r++) {
        for (var c = 0; c < numTitleCols; c++) {
            var red = Math.floor(Math.random() * 255);
            var green = Math.floor(Math.random() * 255);
            var blue = Math.floor(Math.random() * 255);
            for (var tr = 0; tr < titleHeight; tr++) {
                for (var tc = 0; tc < titleWidth; tc++) {
                    var trueX = (c * titleWidth) + tc;
                    var trueY = (r * titleHeight) + tr;
                    var pos = (trueY * (imageData.width * 4)) + (trueX * 4);
                    pixels[pos] = red;
                    pixels[pos + 1] = green;
                    pixels[pos + 2] = blue;
                    pixels[pos + 3] = 255;
                }
            }
        }
    }
    context.putImageData(imageData, 0, 0);
})();
