(function(i) {
    var canvas = document.getElementById('canvas' + i);
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = './images/1.jpg';

    img.onload = function() {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imgData.data;
        var count = pixels.length;

        context.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < count; i++) {
            pixels[i * 4] = 255 - pixels[i * 4];
            pixels[i * 4 + 1] = 255 - pixels[i * 4 + 1];
            pixels[i * 4 + 2] = 255 - pixels[i * 4 + 2];
        }

        context.putImageData(imgData, 0, 0);
    }
})(1);

(function(i) {
    var canvas = document.getElementById('canvas' + i);
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = './images/1.jpg';

    img.onload = function() {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imgData.data;
        var count = pixels.length;

        context.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < count; i++) {

            var average = (pixels[i * 4] + pixels[i * 4 + 1] + pixels[i * 4 + 2]) / 3;

            pixels[i * 4] = average;
            pixels[i * 4 + 1] = average;
            pixels[i * 4 + 2] = average;
        }

        context.putImageData(imgData, 0, 0);
    }
})(2);

(function(i) {
    var canvas = document.getElementById('canvas' + i);
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = './images/1.jpg';

    img.onload = function() {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imgData.data;
        var count = pixels.length;

        context.clearRect(0, 0, canvas.width, canvas.height);

        var numTitleRows = 20;
        var numTitleCols = 20;

        var titleWidth = imgData.width / numTitleCols;
        var titleHeight = imgData.height / numTitleRows

        for (var i = 0; i < numTitleRows; i++)
            for (var c = 0; c < numTitleCols; c++) {
                var x = (c * titleWidth) + (titleWidth / 2);
                var y = (i * titleHeight) + (titleHeight / 2);

                var pos = (Math.floor(y) * (imgData.width * 4)) + (Math.floor(x) * 4);

                var red = pixels[pos];
                var green = pixels[pos + 1];
                var blue = pixels[pos + 2];

                context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
                context.fillRect(x - (titleWidth / 2), y - (titleHeight / 2), titleWidth, titleHeight);
            }
    }
})(3);


(function(i) {
    var canvas = document.getElementById('canvas' + i);
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = './images/2.jpg';

    img.onload = function() {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imgData.data;
        var count = pixels.length;

        context.clearRect(0, 0, canvas.width, canvas.height);

        var numTitleRows = 50;
        var numTitleCols = 50;

        var titleWidth = imgData.width / numTitleCols;
        var titleHeight = imgData.height / numTitleRows

        for (var i = 0; i < numTitleRows; i++)
            for (var c = 0; c < numTitleCols; c++) {
                var x = (c * titleWidth) + (titleWidth / 2);
                var y = (i * titleHeight) + (titleHeight / 2);

                var pos = (Math.floor(y) * (imgData.width * 4)) + (Math.floor(x) * 4);

                var red = pixels[pos];
                var green = pixels[pos + 1];
                var blue = pixels[pos + 2];

                context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
                context.fillRect(x - (titleWidth / 2), y - (titleHeight / 2), titleWidth, titleHeight);
            }
    }
})(4);


(function(i) {
    var canvas = document.getElementById('canvas' + i);
    var context = canvas.getContext('2d');

    var img = new Image();
    img.src = './images/2.jpg';

    img.onload = function() {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
        var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imgData.data;
        var count = pixels.length;

        context.clearRect(0, 0, canvas.width, canvas.height);

        var numTitleRows = 50;
        var numTitleCols = 50;

        var titleWidth = imgData.width / numTitleCols;
        var titleHeight = imgData.height / numTitleRows

        for (var i = 0; i < numTitleRows; i++)
            for (var c = 0; c < numTitleCols; c++) {
                var x = (c * titleWidth) + (titleWidth / 2);
                var y = (i * titleHeight) + (titleHeight / 2);

                var pos = (Math.floor(y) * (imgData.width * 4)) + (Math.floor(x) * 4);

                var red = pixels[pos];
                var green = pixels[pos + 1];
                var blue = pixels[pos + 2];

                context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
                context.beginPath();
                context.arc(x, y, titleWidth / 2, titleHeight / 2, Math.PI * 2, false);
                context.closePath();
                context.fill();
            }
    }
})(5);
