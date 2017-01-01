(function() {
    // init(speed,divid,width,height,completeFunc,type)
    // speed 游戏速度
    // divid 传入一个div的ID
    // width 游戏界面宽度
    // height 游戏界面高度
    //  completeFunc 游戏初始化以后调用的函数
    var mylegend = init(50, 'mylegend', 500, 350, main);

    function main() {
        // LGraphics是lufylengend库中的一个绘图类， 内置了一些函数简化绘图。可以单独使用，也可以和LSprite对象配合使用

        // alert('lufylengend start!');

        //drawRect(thickness,lineColor,pointArray,isfill,color)
        // thickness 边框线宽
        // lineColor 边框颜色
        // ponitArray 矩形范围数组[坐标x,坐标y,长,宽]
        // isfill 是否填充矩形
        // color 填充颜色

        var graphics = new LGraphics();
        addChild(graphics);

        graphics.drawRect(1, '#fff', [50, 50, 100, 100]);
        graphics.drawRect(10, "#000000", [170, 50, 100, 100], true, "#880088");
    }
})();
