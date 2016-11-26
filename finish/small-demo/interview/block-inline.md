block
---

* 对于常规流中，如果width没有设置，自动填充父容器
* 可用margin padding
* 没有高度的时候会扩展高度包含常规流中的子元素
* 忽略vertical-align

inline
---

* 水平方向上根据direction依次布局

* 不会再元素前后换行

* 受white-space控制

* margin/padding在竖直方向上无效，水平方向上有效

* widht/height属性对非替换行内元素无效，宽度由元素内容决定

* 非替换行内元素的行高由line-height确定，替换行内元素的行高由height,margin,padding和border决定

* 浮动或者决定定位时会替换为block

* vertical-align属性生效
