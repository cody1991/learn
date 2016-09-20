// 星星的构造类
function Stars(ctx, width, height, amount) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.stars = this.getStars(amount);
}

Stars.prototype.getStars = function(amount) {
    var stars = [];
    while (amount--) {
        stars.push({
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            r: Math.random() + 0.2
        });
    }
    return stars;
}

Stars.prototype.draw = function() {
    var ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = 'white';
    this.stars.forEach(function(star) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fill();
    });
    ctx.restore();
}

Stars.prototype.blink = function() {
    this.stars.map(function(star) {
        var sign = Math.random() > 0.5 ? 1 : -1;
        star.r += sign * 0.2;
        if (star.r < 0) {
            star.r = -star.r;
        } else if (star.r > 1) {
            star.r -= 0.2
        }
        return star;
    });
}
