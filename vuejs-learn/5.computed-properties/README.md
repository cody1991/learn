在模板中表达式非常便利，但是它们实际上只用于简单的操作。模板是为了描述视图的结构。在模板中放入太多的逻辑会让模板过重且难以维护。这就是为什么 Vue.js 将绑定表达式限制为一个表达式。如果需要多于一个表达式的逻辑，应当使用计算属性。

##基础例子

    <div id="example">
      a={{ a }}, b={{ b }}
    </div>
    var vm = new Vue({
      el: '#example',
      data: {
        a: 1
      },
      computed: {
        // 一个计算属性的 getter
        b: function () {
          // `this` 指向 vm 实例
          return this.a + 1
        }
      }
    })