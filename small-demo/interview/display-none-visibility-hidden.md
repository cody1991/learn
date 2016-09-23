* `display:none` 会让元素完全从渲染树中消失，渲染的时候不占据任何空间。`visibility:hidden` 不会让元素从渲染树中消失，渲染元素继续占据空间，只是内容不可见

* `display:none` 非继承属性，子孙节点消失，都无法显示。`visibility:hidden` 非继承属性，子孙可以通过 `visibility:visible` 显示

* 修改常规流中元素的 `display` 通常造成文档重排，修改 `visibility` 属性只会造成元素的重绘

* 读屏器不会读取 `display:none`元素内容，会读取`visibility:hidden`元素内容 
