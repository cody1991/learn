var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/headers', function(req, res) {
    res.set('Content-Type', 'text/plain');
    var s = '';

    function addString(reqString, reqObj) {
        console.log(typeof reqObj)

        s += reqString + ' : \n';

        if (typeof reqObj === 'object') {
            for (var name in reqObj) {
                s += name + ': ' + reqObj[name] + '\n';
            }
        }
        if (typeof reqObj === 'string') {
            s += reqObj + '\n';
        }

        s += '\n';
    }

    addString('req.params', req.params);
    addString('req.query', req.query);
    addString('req.body', req.body);
    addString('req.route', req.route);
    addString('req.cookies', req.cookies);
    addString('req.headers', req.headers);
    addString('req.ip', req.ip);
    addString('req.path', req.path);
    addString('req.host', req.host);
    addString('req.xhr', req.xhr);
    addString('req.protocol', req.protocol);
    addString('req.secure', req.secure);
    addString('req.url', req.url);
    addString('req.acceptedlanguages', req.acceptedlanguages);

    // 书本 p52 完整


    res.send(s);
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '.');
});
