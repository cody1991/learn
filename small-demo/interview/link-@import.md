* link是html方式，@import是css方式

* link最大限度支持并行下载，@import过多嵌套导致串行下载

* link是通过 rel='alternate stylesheet'指定候选样式

* 浏览器对link支持早于@import，可以使用@import对老浏览器隐藏样式

* @import必须在样式规则钱，可以在css文件中引用其他文件
