var http = require('http'),
    formidable = require('formidable');

var server = http.createServer(function(req, res) {
    switch (req.method) {
        case 'GET':
            show(req, res);
            break;
        case 'POST':
            upload(req, res);
            break;
    }
});

function show(req, res) {
    var html = '<form method="post" action="/" enctype="multipart/form-data">' + '<p><input type="text" name="name"/></p>' + '<p><input type="text" name="name2"/></p>' + '<p><input type="file" name="file"/></p>' + '<p><input type="submit" value="upload"/></p>' + '</form>';

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Content-Length', Buffer.byteLength(html));
    res.end(html);
}

function upload(req, res) {
    if (!isFormData(req)) {
        res.statusCode = 400;
        res.end('Bad Request: expecting multipart/form-data');
        return;
    }

    var form = new formidable.IncomingForm();
    // 精简的写法
    form.parse(req, function(err, fields, files) {
        console.log(fields);
        console.log(files);
        res.end('upload complete');
    });

    form.on('progress', function(bytesReceived, bytesExpected) {
        var percent = Math.floor(bytesReceived / bytesExpected * 100);
        console.log(percent + '%');
    });
    // { name: 'haha', name2: 'haha2' }
    // { file:
    //    File {
    //      domain: null,
    //      _events: {},
    //      _eventsCount: 0,
    //      _maxListeners: undefined,
    //      size: 1933651,
    //      path: 'C:\\Users\\cody\\AppData\\Local\\Temp\\upload_dd4040ac967ec65633a2f03dcbf0fad3',
    //      name: '?????????.pdf',
    //      type: 'application/pdf',
    //      hash: null,
    //      lastModifiedDate: 2016-09-19T02:45:54.864Z,
    //      _writeStream:
    //       WriteStream {
    //         _writableState: [Object],
    //         writable: false,
    //         domain: null,
    //         _events: {},
    //         _eventsCount: 0,
    //         _maxListeners: undefined,
    //         path: 'C:\\Users\\cody\\AppData\\Local\\Temp\\upload_dd4040ac967ec65633a2f03dcbf0fad3',
    //         fd: null,
    //         flags: 'w',
    //         mode: 438,
    //         start: undefined,
    //         autoClose: true,
    //         pos: undefined,
    //         bytesWritten: 1933651,
    //         closed: true } } }



    // 文本域
    // form.on('field', function(field, value) {
    //     console.log(field);
    //     console.log(value.toString());
    //     // name (input 里面的 name)
    //     // upload (输入框)
    //     // 可多个

    //     // 例子
    //     // name
    //     // haha
    //     // name2
    //     // haha2
    // });

    // form.on('file', function(name, file) {
    //     console.log(name);
    //     console.log(file);
    //     // file
    //     // File {
    //     //   domain: null,
    //     //   _events: {},
    //     //   _eventsCount: 0,
    //     //   _maxListeners: undefined,
    //     //   size: 1933651,
    //     //   path: 'C:\\Users\\cody\\AppData\\Local\\Temp\\upload_ca5aeab766ced8f78524c3608eb86e1c',
    //     //   name: '?????????.pdf',
    //     //   type: 'application/pdf',
    //     //   hash: null,
    //     //   lastModifiedDate: 2016-09-19T02:41:21.528Z,
    //     //   _writeStream:
    //     //    WriteStream {
    //     //      _writableState:
    //     //       WritableState {
    //     //         objectMode: false,
    //     //         highWaterMark: 16384,
    //     //         needDrain: true,
    //     //         ending: true,
    //     //         ended: true,
    //     //         finished: true,
    //     //         decodeStrings: true,
    //     //         defaultEncoding: 'utf8',
    //     //         length: 0,
    //     //         writing: false,
    //     //         corked: 0,
    //     //         sync: false,
    //     //         bufferProcessing: false,
    //     //         onwrite: [Function],
    //     //         writecb: null,
    //     //         writelen: 0,
    //     //         bufferedRequest: null,
    //     //         lastBufferedRequest: null,
    //     //         pendingcb: 0,
    //     //         prefinished: true,
    //     //         errorEmitted: false,
    //     //         bufferedRequestCount: 0,
    //     //         corkedRequestsFree: [Object] },
    //     //      writable: false,
    //     //      domain: null,
    //     //      _events: {},
    //     //      _eventsCount: 0,
    //     //      _maxListeners: undefined,
    //     //      path: 'C:\\Users\\cody\\AppData\\Local\\Temp\\upload_ca5aeab766ced8f78524c3608eb86e1c',
    //     //      fd: null,
    //     //      flags: 'w',
    //     //      mode: 438,
    //     //      start: undefined,
    //     //      autoClose: true,
    //     //      pos: undefined,
    //     //      bytesWritten: 1933651,
    //     //      closed: true } }
    // });

    // form.on('end', function() {
    //     res.end('upload complete');
    // });
}

function isFormData(req) {
    var type = req.headers['content-type'] || '';
    return 0 == type.indexOf('multipart/form-data');
}

server.listen(3000);
