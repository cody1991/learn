(function() {
    var myElement = document.querySelector('.start');
    // var mc = new Hammer(myElement);
    // 替换成使用Hammer.Manager(myElement,myOptions)来处理
    // 当然如果我们同时给一个元素上 绑定多个事件用new Hammer(el);直接通过on方法也是可以实现的
    // 但是实际上的测试效果，识别度与灵活度比Hammer.Manager低很多。
    // 因为Manager控制里面，引入了recognizeWith与requireFailure用来关联2个相近的事件，从而提高可用性

    var mc = new Hammer.Manager(myElement);

    mc.add(new Hammer.Pan({
        direction: Hammer.DIRECTION_ALL,
        threshold: 0
    }));

    mc.add(new Hammer.Tap({
        event: 'quadrupletap',
        taps: 4
    }));

    mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));

    // 通过get方法我们可以得到指定对应的识别器

    // pinch和rotate识别器在默认情况下都是禁用的,因为他们会有元素阻塞,但是我们可以手动开启：
    // mc.get('pinch').set({ enable: true });
    // mc.get('rotate').set({ enable: true });

    // 我们还可以为pan与swipe 开启纵向滑动
    // hammertime.get('pan').set({
    //     direction:Hammer.DIRECTION_ALL
    // });
    // hammertime.get('swipe').set({
    //     direction:Hammer.DIRECTION_ALL
    // });
    // 默认是关了上下滑动
    // Hammer.DIRECTION_VERTICAL 也可以这样开启只有纵向

    mc.on('pan', function(ev) {
        console.log(ev.type);
    });

    mc.on('swipe', function(ev) {
        console.log(ev.type);
    });

    mc.on('quadrupletap', function(ev) {
        console.log(ev.type);
    });

    // 最后官方还提到提供一个神秘hammer.input事件，在每一次有用户交互的时候都会被触发，可以得到非常有用的数据
    mc.on("hammer.input", function(ev) {
        console.log(ev.type);
        console.log(ev.isFinal)
    });


    // utils 提供的基础方法

    // on 方法
    Hammer.on(window, 'load resize scroll', function(ev) {
        console.log(ev);
    });

    // 遍历
    Hammer.each([10, 20, 30, 40], function(item, index, src) {
        console.log(item, index, src);
    });

    // 合并
    var options = {
        b: false
    };
    var defaults = {
        a: true,
        b: true,
        c: [1, 2, 3]
    }
    Hammer.merge(options, defaults);
})();
