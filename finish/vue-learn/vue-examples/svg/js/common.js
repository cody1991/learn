var stats = [{
    label: 'A',
    value: 100
}, {
    label: 'B',
    value: 100
}, {
    label: 'C',
    value: 100
}, {
    label: 'D',
    value: 100
}, {
    label: 'E',
    value: 100
}, {
    label: 'F',
    value: 100
}];

Vue.component('polygraph', {
    props: ['stats'],
    template: '#polygraph-template',
    replace: true,
    computed: {
        points: function() {
            console.log(this);
            var total = this.stats.length;
            return this.stats.map(function(stat, i) {
                var point = valueToPoint(stat.value, i, total);
                return point.x + ',' + point.y
            }).join(' ');
        }
    },
    components: {
        'axis-label': {
            props: {
                stat: Object,
                index: Number,
                total: Number
            },
            template: '#axis-label-template',
            replace: true,
            computed: {
                point: function() {
                    return valueToPoint(+this.stat.value + 15, this.index, this.total)
                }
            }
        }
    }
});

function valueToPoint(value, index, total) {
    var x = 0,
        y = -value * 0.8,
        angle = Math.PI * 2 / total * index,
        cos = Math.cos(angle),
        sin = Math.sin(angle),
        tx = x * cos - y * sin + 100,
        ty = x * sin + y * cos + 100;
    return {
        x: tx,
        y: ty
    }
}

var app = new Vue({
    el: '#app',
    data: {
        newLabel: '',
        stats: stats
    },
    methods: {
        remove: function(stat) {
            if (this.stats.length > 3) {
                this.stats.$remove(stat);
            } else {
                alert('Can\'t delete more!');
            }
        },
        add: function(e) {
            e.preventDefault();
            if (!this.newLabel) {
                return;
            }
            this.stats.push({
                label: this.newLabel,
                value: 100
            });
            this.newLabel = '';
        }
    }
});
