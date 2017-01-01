// 包含一些特性——期望使用的父组件数据的属性。可以是数组或对象。对象用于高级配置，如类型检查，自定义验证，默认值等。

Vue.component('props-demo-simple', {
    props: ['size', 'myMessage']
});

Vue.component('props-demo-advanced', {
    props: {
        size: Number,
        name: {
            type: String,
            required: true,
            twoWay: true
        }
    }
});
