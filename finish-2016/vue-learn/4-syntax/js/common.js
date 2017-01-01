var app = new Vue({
    el: '#app',
    data: {
        msg: 'vue',
        raw_html: '<p>123</p>',
        greeting: true,
        url: 'http://www.baidu.com',
        isDisabled: true
    },
    methods: {
        doSomething: function() {
            console.log('doSomething');
        }
    }
});

// 修饰符 (Modifiers) 是以半角句号 . 开始的特殊后缀，用于表示指令应当以特殊方式绑定。例如 .literal 修饰符告诉指令将它的值解析为一个字面字符串而不是一个表达式：

// <a v-bind:href.literal="/a/b/c"></a>
