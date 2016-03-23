(function() {
    function makeCounter() {
        var i = 0;

        return function() {
            console.log(++i);
        }
    }

    var counter = makeCounter();

    counter();
    counter();

    var counter2 = makeCounter();
    counter2();
    counter2();

    counter();


    // 由于括弧()和JS的&&，异或，逗号等操作符是在函数表达式和函数声明上消除歧义的
    // 所以一旦解析器知道其中一个已经是表达式了，其它的也都默认为表达式了
    // 不过，请注意下一章节的内容解释
    var i = function() {
        return 10;
    }();

    console.log(i);

    true && function() { console.log('&&') }();

    0,
    function() { console.log(',') }();

    // !function() { console.log('!') }();
    // ~function() { console.log('~') }();
    // -function() { console.log('-') }();
    // +function() { console.log('+') }();

    var elems = document.getElementsByTagName('a');

    // 错误
    // for (var i = 0; i < elems.length; i++) {
    //     elems[i].addEventListener('click', function(e) {
    //         e.preventDefault();
    //         console.log('I am link #' + i);
    //     }, false);
    // }


    // for (var i = 0; i < elems.length; i++) {
    //     (function(lockedInIndex) {
    //         elems[i].addEventListener('click', function(e) {
    //             e.preventDefault();
    //             console.log('I am link #' + lockedInIndex);
    //         }, false);
    //     })(i);
    // }

    for (var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', (function(lockedInIndex) {
            return function(e) {
                e.preventDefault();
                console.log('I am link #' + lockedInIndex);
            }
        })(i), false);
    }




})();