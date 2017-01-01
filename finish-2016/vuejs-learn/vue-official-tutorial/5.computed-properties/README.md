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

结果：

    a=1, b=2

你可以像绑定普通属性一样在模板中绑定计算属性。Vue 知道 vm.b 依赖于 vm.a，因此当 vm.a 发生改变时，依赖于 vm.b 的绑定也会更新。而且最妙的是我们是声明式地创建这种依赖关系：计算属性的 getter 是干净无副作用的，因此也是易于测试和理解的。

##计算属性vs.$watch

Vue.js 提供了一个方法 $watch，它用于观察 Vue 实例上的数据变动。当一些数据需要根据其它数据变化时， $watch 很诱人 —— 特别是如果你来自 AngularJS。不过，通常更好的办法是使用计算属性而不是一个命令式的 $watch 回调。考虑下面例子：

    var vm = new Vue({
      data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      }
    })

    vm.$watch('firstName', function (val) {
      this.fullName = val + ' ' + this.lastName
    })

    vm.$watch('lastName', function (val) {
      this.fullName = this.firstName + ' ' + val
    })

上面代码是命令式的重复的。跟计算属性对比：

    var vm = new Vue({
      data: {
        firstName: 'Foo',
        lastName: 'Bar'
      },
      computed: {
        fullName: function () {
          return this.firstName + ' ' + this.lastName
        }
      }
    })

#计算setter

计算属性默认只是 getter，不过在需要时你也可以提供一个 setter：

    // ...
    computed: {
      fullName: {
        // getter
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
    }
    // ...

现在在调用 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会有相应更新。