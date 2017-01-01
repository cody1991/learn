var parse = require('url').parse;

module.exports = function route(obj) {
    return function(req, res, next) {
        if (!obj[req.method]) {
            next();
            return;
        }
        var routes = obj[req.method];
        var url = parse(req.url);
        var paths = Object.keys(routes);

        for (var i = 0; i < paths.length; i++) {
            var path = paths[i];
            var fn = routes[path];
            path = path
                .replace(/\//g, '\\/')
                .replace(/:(\w+)/g, '([^\\/]+)');


            console.log(path);

            // localhost:3000/users/1
            // 变成了 \/users\/([^\/]+)

            // [^\/]+  除了 / 以外的所有字符，一个或多个

            // 如果没有带/1什么的,captures是素组 ['/users']

            var re = new RegExp('^' + path + '$');
            var captures = url.pathname.match(re);
            console.log(captures);

            // 这里是['/users/1',1];
            if (captures) {
                var args = [req, res].concat(captures.slice(1));
                console.log(captures.length, captures.slice(1));
                fn.apply(null, args);
                // 带上req,res,或者参数，然后调用函数
                return;
            }
        }
        next();
    }
};