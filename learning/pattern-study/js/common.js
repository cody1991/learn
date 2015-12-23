(function() {
    var _self = this;
    _self.width = 640; //设置默认最大宽度
    _self.fontSize = 100; //默认字体大小
    _self.widthProportion = function() {
        var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
        return p > 1 ? 1 : p < 0.5 ? 0.5 : p;
    };
    _self.changePage = function() {
        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px !important");
    }
    _self.changePage();
    window.addEventListener('resize', function() {
        _self.changePage();
    }, false);
})();


(function() {
    // search()测试
    var str = 'hello world,hello world';
    console.log(str.search(/hello/));
    console.log(str.search(/hello/g));
    console.log(str.search(/world/));
    console.log(str.search("wo"));
    console.log(str.search(/longen/));
    var str2 = 'Hello';
    console.log(str2.search(/hello/i));
    // end search();

    line();

    str = 'hello world';
    console.log(str.match('hello'));
    console.log(str.match('Hello'));
    console.log(str.match(/hello/));

    str2 = "1 plus 1 equal 2";
    console.log(str2.match(/1/g));
})();

function line() {
    console.log('---------');
}
