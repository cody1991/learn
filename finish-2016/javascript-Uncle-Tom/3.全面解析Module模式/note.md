[教程地址](http://www.cnblogs.com/TomXu/archive/2011/12/30/2288372.html)

Module模式是JavaScript编程中一个非常通用的模式，一般情况下，大家都知道基本用法，本文尝试着给大家更多该模式的高级使用方式。

首先我们来看看Module模式的基本特征：

* 模块化，可重用
* 封装了变量和function，和全局的namaspace不接触，松耦合
* 只暴露可用public的方法，其它私有方法全部隐藏


关于Module模式，最早是由YUI的成员Eric Miraglia在4年前提出了这个概念，我们将从一个简单的例子来解释一下基本的用法（如果你已经非常熟悉了，请忽略这一节）。