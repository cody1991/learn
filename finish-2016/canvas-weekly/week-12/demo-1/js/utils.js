var utils = {
    norm: function(value, min, max) {
        return (value - min) / (max - min);
    },
    lerp: function(norm, min, max) {
        return (max - min) * norm + min;
    },
    map: function(value, sourceMin, sourceMax, destMin, destMax) {
        return utils.lerp(utils.norm(value, sourceMin, sourceMax), destMin, destMax);
    },
    clamp: function(value, min, max) {
        return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
    },
    distance: function(p0, p1) {
        var dx = p1.x - p0.x;
        var dy = p1.y - p0.y;
        return Math.sqrt(dx * dx + dy * dy);
    },
    randomInt: function(min, max) {
        return min + Math.random() * (max - min + 1);
    },
    degreesToRads: function(degrees) {
        return degrees / 180 * Math.PI;
    }
}
