function arrowFunctions() {
    // var selected = allJobs.filter(function(job) {
    //     return job.isSelected();
    // });

    // var selected = allJobs.filter(job => job.isSelected());

    let values = [1, 2, 3, 4, 5];

    var total = values.reduce(function(a, b) {
        return a + b;
    });

    console.log(total);

    var total2 = values.reduce((a, b) => a + b);

    console.log(total2);

    // $().click(function(event){
    //     fun1();
    //     fun2();
    // });

    // $().click(event => {
    //     fun1();
    //     fun2();
    // });

    // var chewToys = puppies.map(puppy => ({}));

    // 这个问题经常出现的其中一个原因是，无论是否需要，function函数总会自动接收一个this值。你是否写过这样的hack代码：

    // {
    //   ...
    //   addAll: function addAll(pieces) {
    //     var self = this;
    //     _.each(pieces, function (piece) {
    //       self.add(piece);
    //     });
    //   },
    //   ...
    // }

    // 在这里，你希望在内层函数里写的是this.add(piece)，不幸的是，内层函数并未从外层函数继承this的值。在内层函数里，this会是window或undefined，临时变量self用来将外部的this值导入内部函数。（另一种方式是在内部函数上执行.bind(this)，两种方法都不甚美观。）

    // 在ES6中，不需要再hackthis了，但你需要遵循以下规则：

    // 通过object.method()语法调用的方法使用非箭头函数定义，这些函数需要从调用者的作用域中获取一个有意义的this值。
    // 其它情况全都使用箭头函数。

    // ES6
    // {
    //   ...
    //   addAll: function addAll(pieces) {
    //     _.each(pieces, piece => this.add(piece));
    //   },
    //   ...
    // }

    // 在ES6的版本中，注意addAll方法从它的调用者处获取了this值，内部函数是一个箭头函数，所以它继承了外围作用域的this值。

    // 超赞的是，在ES6中你可以用更简洁的方式编写对象字面量中的方法，所以上面这段代码可以简化成：

    // ES6的方法语法
    // {
    //   ...
    //   addAll(pieces) {
    //     _.each(pieces, piece => this.add(piece));
    //   },
    //   ...
    // }
}

export default arrowFunctions;
