var path = require('path'),
    express = require('express'),
    app = express();

// 设定端口
app.set('port', (process.env.PORT || 3000));

// 设定静态文件的目录
app.use('/', express.static(path.join(__dirname, '')));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});