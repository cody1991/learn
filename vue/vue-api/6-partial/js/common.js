Vue.partial('my-partial', '<div>This is a partial!{{msg}}</div>');

var myPartial = Vue.partial('my-partial');

// <partial> 元素是已注册的 partial 的插槽，partial 在插入时被 Vue 编译。 <partial> 元素本身会被替换。<partial> 元素需要指定 name 特性。
