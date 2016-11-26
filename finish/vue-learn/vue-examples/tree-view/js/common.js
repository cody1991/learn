// demo data
var data = {
    name: 'My Tree',
    children: [{
        name: 'hello'
    }, {
        name: 'wat'
    }, {
        name: 'child folder',
        children: [{
            name: 'child folder',
            children: [{
                name: 'hello'
            }, {
                name: 'wat'
            }]
        }, {
            name: 'hello'
        }, {
            name: 'wat'
        }, {
            name: 'child folder',
            children: [{
                name: 'hello'
            }, {}]
        }]
    }]
}

Vue.component('item', {
    template: '#item-template',
    props: {
        model: Object
    },
    data: function() {
        return {
            open: false
        }
    },
    computed: {
        isFolder: function() {
            return this.model.children && this.model.children.length;
        }
    },
    methods: {
        toggle: function() {
            if (this.isFolder) {
                this.open = !this.open;
            }
        },
        addChild: function() {
            this.model.children.push({
                name: 'new Stuff'
            });
        },
        changeType: function() {
            if (!this.isFolder) {
                Vue.set(this.model, 'children', []);
                this.addChild();
                this.open = true;
            }
        },
        addChild: function() {
            this.model.children.push({
                name: 'new Stuff'
            });
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        treeData: data
    }
})
