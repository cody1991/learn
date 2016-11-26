var app = new Vue({
    el: '#app',
    data: {
        show: false,
        ok: false,
        transitionName: 'fade'
    }
});

Vue.transition('fade', {
    beforeEnter: function(el) {
        el.textContent = 'beforeEnter';
        console.log('beforeEnter');
    },
    enter: function(el) {
        el.textContent = 'enter';
        console.log('enter');
    },
    afterEnter: function(el) {
        el.textContent = 'afterEnter';
        console.log('afterEnter');
    },
    enterCancelled: function(el) {

    },
    beforeLeave: function(el) {
        el.textContent = 'beforeLeave';
        console.log('beforeLeave');
    },
    leave: function(el) {
        el.textContent = 'leave';
        console.log('leave');
    },
    afterLeave: function(el) {
        el.textContent = 'afterLeave';
        console.log('afterLeave');
    },
    leaveCancelled: function(el) {

    }
});


Vue.transition('bounce', {
    enterClass: 'bounceInLeft',
    leaveClass: 'bounceOutRight'
});



Vue.transition('fadejs', {
    css: false,
    enter: function(el, done) {
        $(el).css('opacity', 0)
            .animate({
                opacity: 1
            }, 1000, done);
    },
    enterCancelled: function(el) {
        $(el).stop();
    },
    leave: function(el, done) {
        $(el).animate({
            opacity: 0
        }, 1000, done);
    },
    leaveCancelled: function(el) {
        $(el).stop();
    }
});


Vue.transition("staggered", {
    stagger: function(index) {
        // 每个过渡项目增加 50ms 延时
        // 但是最大延时限制为 300 ms
        return Math.min(300, index * 50);
    }
})

// 也可以只使用 JavaScript 钩子，不用定义任何 CSS 规则。当只使用 JavaScript 过渡时，enter 和 leave 钩子需要调用 done 回调，否则它们将被同步调用，过渡将立即结束。

// 为 JavaScript 过渡显式声明 css: false 是个好主意，Vue.js 将跳过 CSS 检测。这样也会阻止无意间让 CSS 规则干扰过渡。

var app2 = new Vue({
    el: '#app2',
    data: {
        show: false,
        query: '',
        list: [{
            msg: 'Bruce Lee'
        }, {
            msg: 'Jackie Chan'
        }, {
            msg: 'Chuck Norris'
        }, {
            msg: 'Jet Li'
        }, {
            msg: 'Kung Fury'
        }]
    }
});
