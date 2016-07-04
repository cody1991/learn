(function() {
    console.log('log');
    console.info('info');
    console.debug('debug');
    console.warn('warn');
    console.error('bar');

    var obj = {
        name: 'cody',
        age: 18
    }

    console.log(obj);

    var uid = 233;
    console.log('UserID:', uid);

    // 支持使用 [default|system|...] 的格式将 log 输出到指定 tab 面板：

    console.log('[system]', 'system');
    console.log('[default]', 'default');

    console.log(vConsole.tool.isString('123'));
    // vConsole.tool.isString(value)

    // vConsole.tool.isArray(value)

    // vConsole.tool.isBoolean(value)

    // vConsole.tool.isElement(value)

    // vConsole.tool.isFunction(value)

    // vConsole.tool.isNull(value)

    // vConsole.tool.isNumber(value)

    // vConsole.tool.isObject(value)

    // vConsole.tool.isSymbol(value)

    // vConsole.tool.isUndefined(value)

    vConsole.tool.setStorage('count', 1);

    var myPlugin = new vConsole.VConsolePlugin('my_plugin', 'My Plugin');

    myPlugin.on('init', function() {
        console.log('My plugin init');
    });

    myPlugin.on('renderTab', function(callback) {
        var html = '<div>Click the tool button below!</div>';
        callback(html);
    });

    myPlugin.on('addTool', function(callback) {
        var button = {
            name: 'Reload',
            onClick: function(event) {
                location.reload();
            }
        }

        callback([button]);
    })

    vConsole.addPlugin(myPlugin);

    $('.btn').on('click', function() {

        $.ajax({
            type: 'get',
            url: 'http://api.impingo.me/web/getNiceUser?period=20160527',
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function(info) {
                console.log(info);
            }
        });
    });
})();
