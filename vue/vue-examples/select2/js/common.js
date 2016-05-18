Vue.directive('select', {
    twoWay: true,
    priority: 1000,
    params: ['options'],
    bind: function() {
        var self = this;
        $(this.el)
            .select2({
                data: this.params.options
            })
            .on('change', function() {
                // 设置值
                self.set(this.value);
            });
    },
    update: function(value) {
        $(this.el).val(value).trigger('change');
    },
    unbind: function() {
        $(this.el).off().select2('destroy');
    }
})

var app = new Vue({
    el: '#app',
    data: {
        selected: 0,
        options: [{
            id: 1,
            text: 'hello'
        }, {
            id: 2,
            text: 'what'
        }]
    }
});
