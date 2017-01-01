var connect = require('connect'),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

function edit(req, res, next) {
    if ('GET' != req.method) {
        return next();
    }
    res.setHeader('Content-Type', 'text/html');

    res.write('<form method="post" enctype="application/x-www-form-urlencoded" action="/?_method=PUT"> ');
    res.write('<input type="hidden" name="_method" value="put">');
    res.write('<input type="text" name="username" value="Tobi">');
    res.write('<input type="submit" value="update"/>');

    res.write('</form>');

    res.end();
}

function update(req, res, next) {
    console.log('method: ' + req.method);
    console.log('originalMethod ' + req.originalMethod);
    if ('PUT' != req.method) {
        return next();
    }
    res.end('Updated name to ' + req.body.username);
}

var app = connect()
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: false
    }))
    // .use(methodOverride(function(req, res) {
    //     if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    //         var method = req.body._method;
    //         delete req.body._method;
    //         return method;
    //     }
    // }))
    .use(methodOverride('_method'))
    .use(edit)
    .use(update)
    .listen(3000);
