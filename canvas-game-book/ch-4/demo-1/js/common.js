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
        // 增加Image的onload事件
        loader = new LLoader();
        loader.addEventListener(LEvent.COMPLETE, loadBitmapdata);
        loader.load('./images/1.jpg', 'bitmapData');
    }

    function loadBitmapdata(event) {
        // loader.content是一个Image
        // 创建一个LBitmapData对象，并将已读取完的Image作为参数传递
        // LBitmapData用来保存和读取Image对象，如果要显示图片，需要使用LBitmap
        var bitmapdata = new LBitmapData(loader.content);
        // 新建LBitmap对象，把上面的LBitmapData对象作为参数传入
        // LBitmap作用是把Image对象显示在Canvas画板
        var bitmap = new LBitmap(bitmapdata);

        bitmap.x = 50;
        bitmap.y = 50;
        bitmap.rotate = 60;
        bitmap.alpha = 0.4;

        var layer = new LSprite();
        // 将对象添加到canvas，addChild会按照先后顺序依次显示
        addChild(layer);

        layer.addChild(bitmap);
    }
})();

// LBitmapData(image,x,y,width,height);

// LBitmap LBitmap不但可以把图片显示在canvas上，还可以控制图片的各种属性，比如坐标，透明度，旋转，缩放
