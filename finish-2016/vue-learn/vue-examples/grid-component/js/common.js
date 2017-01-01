Vue.component('demo-grid', {
    template: '#grid-template',
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data: function() {
        var sortOrders = {};
        this.columns.forEach(function(key) {
            sortOrders[key] = 1;
        });

        return {
            sortKey: this.columns[0],
            sortOrders: sortOrders
        }
    },
    methods: {
        sortBy: function(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        searchQuery: '',
        gridColumns: ['name', 'power'],
        gridData: [{
            name: 'Chuck Norris',
            power: Infinity
        }, {
            name: 'Bruce Lee',
            power: 9000
        }, {
            name: 'Jackie Chan',
            power: 7000
        }, {
            name: 'Jet Li',
            power: 8000
        }]
    }
})
