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

        var backLayer = new LSprite();
        addChild(backLayer);

        // 利用beginBitmapFill把LitmapData对象存储到LGraphics对象中
        backLayer.graphics.beginBitmapFill(bitmapdata);
        // 利用drawArc绘制一个圆形区域，LGraphics对象会直接将存储在自己内部的LBitmapData对象透过这个圆形区域显示出来
        backLayer.graphics.drawArc(1, '#000', [110, 80, 50, 0, Math.PI * 2]);

        backLayer.graphics.beginBitmapFill(bitmapdata);
        backLayer.graphics.drawRect(1, '#000', [180, 150, 50, 50]);

        backLayer.graphics.beginBitmapFill(bitmapdata);
        backLayer.graphics.drawVertices(1, '#000', [
            [120, 50],
            [100, 200],
            [200, 150]
        ]);
    }
})();
