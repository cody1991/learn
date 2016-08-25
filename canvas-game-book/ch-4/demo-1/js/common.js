(function() {
    // init(speed,divid,width,height,completeFunc,type)
    // speed 游戏速度
    // divid 传入一个div的ID
    // width 游戏界面宽度
    // height 游戏界面高度
    //  completeFunc 游戏初始化以后调用的函数
    var mylegend = init(50, 'mylegend', 500, 350, main),
        loader;

    function main() {
        // alert('lufylengend start!');
        loader = new LLoader();
        loader.addEventListener(LEvent.COMPLETE, loadBitmapdata);
        loader.load('./images/1.jpg', 'bitmapData');
    }

    function loadBitmapdata(event) {
        var bitmapdata = new LBitmapData(loader.content);
        var bitmap = new LBitmap(bitmapdata);
        addChild(bitmap);
    }
})();
