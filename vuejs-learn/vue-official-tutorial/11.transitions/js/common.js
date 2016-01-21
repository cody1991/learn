var vm = new Vue({
    el: '#example',
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
    },
    methods: {
        toggle: function() {
            this.show = !this.show;
        }
    }
})


Vue.transition('expand', {
    beforeEnter: function(el) {
        el.textContent = 'beforeEnter';
    },
    enter: function(el) {
        el.textContent = 'enter';
    },
    afterEnter: function(el) {
        el.textContent = 'afterEnter';
    },
    enterCancelled: function(el) {

    },
    beforeLeave: function(el) {
        el.textContent = 'beforeLeave';
    },
    leave: function(el) {
        el.textContent = 'leave';
    },
    afterLeave: function(el) {
        el.textContent = 'afterLeave';
    },
    leaveCancelled: function(el) {

    }
});


Vue.transition('fade', {
    css: false,
    enter: function(el, done) {
        $(el).css('opacity', 0).animate({
            opacity: 1
        }, 1000, done);
    },
    enterCancelled: function(el) {
        $(el).stop();
    },
    leave: function(el, done) {
        $(el).animate({
            opacity: 0
        }, 1000, done)
    },
    leaveCancelled: function(el) {
        $(el).stop();
    }
});


Vue.transition('stagger', {
    stagger: function(index) {
        return Math.min(300, index * 50);
    }
})
