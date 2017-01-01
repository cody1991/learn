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
        var graphics = new LGraphics();
        addChild(graphics);

        graphics.add(function(coodx, coody) {
            LGlobal.canvas.strokeStyle = '#000';
            LGlobal.canvas.moveTo(20, 20);
            LGlobal.canvas.lineTo(200, 200);
            LGlobal.canvas.stroke();
        })
    }
})();
