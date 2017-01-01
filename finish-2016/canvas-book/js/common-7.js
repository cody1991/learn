(function() {
    var game = document.getElementById('game');
    var start = document.getElementById('start');

    start.addEventListener('click', function() {
        document.getElementById('mask').style.display = 'none';
    })


    var itemW = 30;
    var itemH = 30;
    var row = 600 / itemH;
    var col = 600 / itemW;

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            var x = j * itemW;
            var y = i * itemH;
            var isBear = false;

            if (i == 0 && j >= 0 && j <= col - 5) {
                isBear = true;
            }

            if (i >= 1 && i <= row - 3 && j == col - 5) {
                isBear = true;
            }

            if (j >= 3 && j <= col - 5 && i == row - 3) {
                isBear = true;
            }


            if (i > row - 3 && j == 3) {
                isBear = true;
            }

            if (j >= 3 && i == row - 1) {
                isBear = true;
            }

            createLink(x, y, isBear);
        }
    }

    function createLink(x, y) {
        var link = document.createElement('a');
        link.style.left = x + 'px';
        link.style.top = y + 'px';

        if (isBear) {
            link.href = 'http://www.baidu.com';
        } else {
            link.href = 'http://www.baidu.com/%%30%30';
        }

        var img = document.createElement('img');

        if (isBear) {
            img.src = './images/u1f43b.png';
        } else {
            img.src = './images/u1f332.png';
        }

        link.appendChild(img);
        game.appendChild(link);
    }
})();
