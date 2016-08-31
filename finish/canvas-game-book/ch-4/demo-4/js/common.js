(function() {
    // init(speed,divid,width,height,completeFunc,type)
    // speed 游戏速度
    // divid 传入一个div的ID
    // width 游戏界面宽度
    // height 游戏界面高度
    //  completeFunc 游戏初始化以后调用的函数
    var mylegend = init(50, 'mylegend', 500, 350, main);

    function main() {
        // alert('lufylengend start!');
        // drawVertices(thickness,lineColor,vertices,isfill,color);

        var graphics = new LGraphics();
        addChild(graphics);

        graphics.drawVertices(1, '#000', [
            [50, 20],
            [80, 20],
            [100, 50],
            [80, 80],
            [50, 80],
            [30, 50]
        ]);

        graphics.drawVertices(1, '#000', [
            [150, 20],
            [180, 20],
            [200, 50],
            [180, 80],
            [150, 80],
            [130, 50]
        ], true, '#fff');
    }
})();
