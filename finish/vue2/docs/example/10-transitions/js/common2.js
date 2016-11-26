Vue.transition('example-transition', {
    enterActiveClass: 'animated tada',
    leaveActiveClass: 'animated bounceOutRight'
});

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        shouldRender: true
    }
});

Vue.transition('example-transition-2', {
    beforeEnter: function(el) {
        el.style.opacity = 0
    },
    onEnter: function(el, done) {
        Velocity(el, {
            opacity: 1,
            fontSize: '1.4em'
        }, {
            duration: 300
        })
        Velocity(el, {
            fontSize: '1em'
        }, {
            complete: done
        })
    },
    onLeave: function(el, done) {
        Velocity(el, {
            translateX: '15px',
            rotateZ: '50deg'
        }, {
            duration: 600
        })
        Velocity(el, {
            rotateZ: '100deg'
        }, {
            loop: 2
        })
        Velocity(el, {
            rotateZ: '45deg',
            translateY: '30px',
            translateX: '30px',
            opacity: 0
        }, {
            complete: done
        })
    }

    // 离开的时候有点问题
});

Vue.transition('staggered-fade', {
    css: false,
    beforeEnter: function(el) {
        el.style.opacity = 0;
        el.style.height = 0;
    },
    onEnter: function(el, done) {
        var delay = el.dataset.index * 50;

        setTimeout(function() {
            Velocity(el, {
                opacity: 1,
                height: '1.6em'
            }, {
                complete: done
            })
        }, delay);
    },
    onLeave: function(el, done) {
        var delay = el.dataset.index * 150;
        setTimeout(function() {
            Velocity(el, {
                opacity: 0,
                height: 0
            }, {
                complete: done
            });
            console.log(1);
        }, delay);
    }
});

new Vue({
    el: '#app2',
    data: {
        message: 'Hello Vue.js',
        shouldRender: true,
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
    computed: {
        computedList: function() {
            var vm = this;
            return this.list.filter(function(item) {
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
            })
        }
    }
});


// beforeEnter: function (el) {
//   // ...
// },
// // the done callback is optional when
// // used in combination with CSS
// onEnter: function (el, done) {
//   // ...
//   done()
// },
// afterEnter: function (el) {
//   // .
// },
// enterCancelled: function (el) {
//   // ...
// },

// beforeLeave: function (el) {
//   // ...
// },
// // the done callback is optional when
// // used in combination with CSS
// onLeave: function (el, done) {
//   // ...
//   done()
// },
// afterLeave: function (el) {
//   // ...
// },
// // leaveCancelled only available with v-show
// leaveCancelled: function (el) {
//   // ...
// }
