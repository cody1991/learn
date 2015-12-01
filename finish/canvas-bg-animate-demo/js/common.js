(function() {
    var doc = document,
        win = window;
    var canvas = doc.getElementById('cas'),
        ctx = canvas.getContext('2d');

    resize();
    window.onresize = resize;

    function resize() {
        canvas.width = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
        canvas.height = win.innerHeight || doc.documentElement.clientHeight || doc.body.clientHeight;
    }

    var RAF = (function() {
        return win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.oRequestAnimationFrame || win.msRequestAnimationFrame || function(callback) {
            win.setTimeout(callback, 1000 / 60);
        }
    })();

    // 获取鼠标坐标
    var warea = {
        x: null,
        y: null,
        max: 20000
    };

    win.onmousemove = function(e) {
        e = e || window.event;

        warea.x = e.clientX;
        warea.y = e.clientY;

    }

    win.onmouseout = function(e) {
        warea.x = null;
        warea.y = null;
    }

    // 粒子系统
    var dots = [];
    for (var i = 0; i < 300; i++) {
        // 坐标
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        // 加速度
        var xa = Math.random() * 2 - 1;
        var ya = Math.random() * 2 - 1;
        // 最大连线距离
        dots.push({
            x: x,
            y: y,
            xa: xa,
            ya: ya,
            max: 6000
        });
    }

    // 延迟执行，不然可能出现错误
    setTimeout(function() {
        animate();
    }, 100);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 把鼠标坐标加进去
        var ndots = [warea].concat(dots);

        dots.forEach(function(dot) {
            // 粒子运动
            dot.x += dot.xa;
            dot.y += dot.ya;

            dot.xa *= (dot.x > canvas.width || dot.x < 0) ? -1 : 1;
            dot.ya *= (dot.y > canvas.height || dot.y < 0) ? -1 : 1;

            ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);

            for (var i = 0; i < ndots.length; i++) {
                var d2 = ndots[i];

                if (dot === d2 || d2.x === null || d2.y === null) continue;

                var xc = dot.x - d2.x;
                var yc = dot.y - d2.y;

                var dis = xc * xc + yc * yc;
                var ratio;

                if (dis < d2.max) {
                    // 靠近鼠标
                    if (d2 === warea && dis > (d2.max / 2)) {
                        dot.x -= xc * 0.03;
                        dot.y -= yc * 0.03;
                    }

                    ratio = (d2.max - dis) / d2.max;

                    ctx.beginPath();
                    ctx.lineWidth = ratio / 2;
                    ctx.strokeStyle = 'rgba(0,0,0,' + (ratio + 0.2) + ')';


                    ctx.moveTo(dot.x, dot.y);
                    ctx.lineTo(d2.x, d2.y);
                    ctx.stroke();
                }

            }
            ndots.splice(ndots.indexOf(dot), 1);
        });

        RAF(animate);
    }

})();
