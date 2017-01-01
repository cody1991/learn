(function(i) {
    var canvas = document.getElementById('canvas' + i);
    var context = canvas.getContext('2d');

    var img1 = new Image();
    img1.src = './images/1.jpg';
    var img2 = new Image();
    img2.src = './images/2.jpg';

    var all = 0;

    img1.onload = function() {
        context.drawImage(img1, 0, 0);
        all++;
        if (all === 2) {
            console.log(canvas.toDataURL());
        }
    }

    img2.onload = function() {
        context.drawImage(img2, 0, 0);
        all++;
        if (all === 2) {
            console.log(canvas.toDataURL());
        }
    }




})(1);
