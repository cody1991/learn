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
})();
