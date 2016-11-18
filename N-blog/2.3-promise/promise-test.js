'use strict';

var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;

    var log = document.getElementById('log');

    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') 开始(同步代码开始)<br/>');

    var p1 = new Promise(function(resolve, reject) {
        log.insertAdjacentHTML('beforeend', thisPromiseCount + ')Promise开始(异步代码开始)<br/>');

        window.setTimeout(function() {
            resolve(thisPromiseCount);
        }, Math.random() * 2000 + 1000);
    });

    p1.then(function(val) {
        log.insertAdjacentHTML('beforeend', val + ') Promise被满足了(异步代码结束)<br/>');
    });

    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') 建立了Promise(同步代码结束)<br/><br/>');
}
