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
        // drawArc(thickness,lineColor,pointArray,isfill,color);
        // pointArray [坐标x,坐标y,半径,起始角度,结束角度,顺时针或者逆时针]

        var graphics = new LGraphics();
        addChild(graphics);

        graphics.drawArc(1, '#000', [60, 60, 50, 0, 240 * Math.PI / 180]);
        graphics.drawArc(2, '#000', [180, 60, 50, 0, 360 * Math.PI / 180], true, '#ccc');
    }
})();
