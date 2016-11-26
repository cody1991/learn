function setup(format) {
    var regexp = /:(\w+)/g;

    return function logger(req, res, next) {
        // console.log(req);
        var str = format.replace(regexp, function(match, property) {
            // 为什么这里第二个是属性

            // console.log(property);
            return req[property];
        });

        // console.log(str);
        next();
    }
}

module.exports = setup;