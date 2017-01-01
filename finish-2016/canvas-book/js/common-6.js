(function(i) {
    var canvas = document.getElementById('canvas' + i);
    var context = canvas.getContext('2d');

    var video = document.getElementById('myVideo');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');

    play.addEventListener('click', function() {
        video.play();
    });

    pause.addEventListener('click', function() {
        video.pause();
    });
    myVideo.addEventListener('play', function() {
        drawCanvas();
    });



    function drawCanvas() {
        if (video.paused || video.ended) {
            return false;
        }

        context.drawImage(video, 0, 0, 500, 300);

        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        var pixels = imageData.data;

        context.clearRect(0, 0, canvas.width, canvas.height);

        var numTitleRows = 50;
        var numTitleCols = 30;

        var titleWidth = imageData.width / numTitleCols;
        var titleHeight = imageData.height / numTitleRows;

        for (var r = 0; r < numTitleRows; r++) {
            for (var c = 0; c < numTitleCols; c++) {
                var x = (c * titleWidth) + (titleWidth / 2);
                var y = (r * titleHeight) + (titleHeight / 2);

                var pos = (Math.floor(y) * (imageData.width * 4)) + (Math.floor(x) * 4);
                var red = pixels[pos];
                var green = pixels[pos + 1];
                var blue = pixels[pos + 2];

                context.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';
                context.fillRect(x - (titleWidth / 2), y - (titleHeight / 2), titleWidth, titleHeight);
            }
        }

        setTimeout(drawCanvas, 30);
    }



})(1);
