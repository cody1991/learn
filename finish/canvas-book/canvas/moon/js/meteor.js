function Meteor(ctx, x, h) {
    this.ctx = ctx;
    this.x = x;
    this.y = 0;
    this.h = h;

    this.vx = -(4 + Math.random() * 4);
    this.vy = -this.vx;
    this.len = Math.random() * 300 + 500;
}

Meteor.prototype.flow = function() {
    // 超出边界了
    if (this.x < -this.len || this.y > this.h + this.len) {
        return false;
    }

    this.x += this.vx;
    this.y += this.vy;
    return true;
}

Meteor.prototype.draw = function() {
    var ctx = this.ctx,
        gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.len);

    var PI = Math.PI;

    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.save();
    ctx.fillStyle = gradient;
    ctx.beginPath();

    ctx.arc(this.x, this.y, 1, PI / 4, 5 * PI / 4);
    ctx.lineTo(this.x + this.len, this.y - this.len);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}
