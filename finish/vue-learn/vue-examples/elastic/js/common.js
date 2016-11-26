document.body.addEventListener('touchmove', function(e) {
    e.preventDefault()
});

Vue.component('draggable-header-view', {
    template: '#header-view-template',
    data: function() {
        return {
            dragging: false,
            c: {
                x: 160,
                y: 160
            },
            start: {
                x: 0,
                y: 0
            }
        }
    },
    computed: {
        headerPath: function() {
            return 'M0,0 L320,0 320,160' + 'Q' + this.c.x + ',' + this.c.y + ' 0,160'
        },
        contentPosition: function() {
            var dy = this.c.y - 160;
            var dampen = dy > 0 ? 2 : 4;
            return {
                transform: 'translate3d(0,' + dy / dampen + 'px,0)'
            };
        }
    },
    methods: {
        startDrag: function(e) {
            e = e.changedTouches ? e.changedTouches[0] : e;
            this.dragging = true;
            this.start.x = e.pageX;
            this.start.y = e.pageY;
        },
        onDrag: function(e) {
            e = e.changedTouches ? e.changedTouches[0] : e;
            if (this.dragging) {
                this.c.x = 160 + (e.pageX - this.start.x);

                var dy = e.pageY - this.start.y;
                var dampen = dy > 0 ? 1.5 : 4;
                this.c.y = 160 + dy / dampen;
            }
        },
        stopDrag: function() {
            if (this.dragging) {
                this.dragging = false;
                dynamics.animate(this.c, {
                    x: 160,
                    y: 160
                }, {
                    type: dynamics.spring,
                    duration: 700,
                    friction: 280
                })
            }
        },
    }
});

new Vue({
    el: 'body'
});
