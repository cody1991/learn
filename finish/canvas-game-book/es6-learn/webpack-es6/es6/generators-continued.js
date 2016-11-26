var generators2 = function() {

    function* somewords() {
        yield 'hello';
        yield 'world';
    }

    for (var word of somewords()) {
        console.log(word);
    }

    // -------------------------------

    //     你或许曾使用过这样的模式：

    //     function dothings() {
    //       setup();
    //       try {
    //         // ... 做一些事情
    //       } finally {
    //         cleanup();
    //       }
    //     }
    //     dothings();
    // 清理（cleanup）过程包括关闭连接或文件，释放系统资源，或者只是更新dom来关闭“运行中”的加载动画。我们希望无论任务成功完成与否都触发清理操作，所以执行流入到finally代码块。

    // 那么生成器中的清理操作看起来是什么样的呢？

    // function* producevalues() {
    //     setup();
    //     try {

    //     } finally {
    //         cleanup();
    //     }
    // }

    // for (var value of producevalues()) {
    //     work(value);
    // }

    // 这段代码看起来很好，但是这里有一个问题：我们没在try代码块中调用work(value)，如果它抛出异常，我们的清理步骤会如何执行呢？

    // 或者假设for-of循环包含一条break语句或return语句。清理步骤又会如何执行呢？

    // 放心，清理步骤无论如何都会执行，ES6已经为你做好了一切。

    // 我们第一次讨论迭代器和for-of循环时曾说过，迭代器接口支持一个可选的.return()方法，每当迭代在迭代器返回{done:true}之前退出都会自动调用这个方法。生成器支持这个方法，mygenerator.return()会触发生成器执行任一finally代码块然后退出，就好像当前的生成暂停点已经被秘密转换为一条return语句一样。

    // 注意，.return()方法并不是在所有的上下文中都会被自动调用，只有当使用了迭代协议的情况下才会触发该机制。所以也有可能生成器没执行finally代码块就直接被垃圾回收了。

    // 突然有人抛出一个错误！for循环捕捉到这个错误并将它放置在一遍，她告诉生成器执行.return()方法。生成器冷静地拆除了所有脚手架并停工。然后for循环取回错误，继续执行正常的异常处理过程。

    // 生成器可以用来实现异步编程，完成你用异步回调或promise链所做的一切。我知道你一定想知道它是如何实现的，为什么yield的能力（这可是生成器专属的特殊能力）足够应对这些任务。毕竟，异步代码不仅产生（yield）数据，还会触发事件，比如从文件或数据库中调用数据，向服务器发起请求并返回事件循环来等待异步过程结束。生成器如何实现这一切？它又是如何不借助回调力量从文件、数据库或服务器中接受数据？

    // 事实上，生成器的.next()方法接受一个可选参数，参数稍后会作为yield表达式的返回值出现在生成器中。那就是说，yield语句与return语句不同，它是一个只有当生成器恢复时才会有值的表达式。

    // var results = yield getdataandlatte(request.areacode);

    // 这一行代码完成了许多功能：

    // 调用getdataandlatte()，假设函数返回我们在截图中看到的字符串“get me the database records for area code...”。
    // 暂停生成器，生成字符串值。
    // 此时可以暂停任意长的时间。
    // 最终，直到有人调用.next({data: ..., coffee: ...})，我们将这个对象存储在本地变量results中并继续执行下一行代码。

    // 下面这段代码完整地展示了这一行代码完整的上下文会话：

    // function* handle(request) {
    //   var results = yield getdataandlatte(request.areacode);
    //   results.coffee.drink();
    //   var target = mosturgentrecord(results.data);
    //   yield updatestatus(target.id, "ready");
    // }

    // yield仍然保持着它的原始含义：暂停生成器，返回值给调用者。但是确实也发生了变化！这里的生成器期待来自调用者的非常具体的支持行为，就好像调用者是它的行政助理一样。

    // 普通函数则与之不同，通常更倾向于满足调用者的需求。但是你可以借助生成器创造一段对话，拓展生成器与其调用者之间可能存在的关系。

    // 这个行政助理生成器运行器可能是什么样的？它大可不必很复杂，就像这样：

    //  function rungeneratoronce(g, result) {
    //   var status = g.next(result);
    //   if (status.done) {
    //     return;  // phew!
    //   }
    //   // 生成器请我们去获取一些东西并且
    //   // 当我们搞定的时候再回调它
    //   doasynchronousworkincludingespressomachineoperations(
    //     status.value,
    //     (error, nextresult) => rungeneratoronce(g, nextresult));
    // }

    //     为了让这段代码运行起来，我们必须创建一个生成器并且运行一次，像这样：

    //       rungeneratoronce(handle(request), undefined);
    // 在之前的文章中，我一个库的示例中提到Q.async()，在那个库中，生成器是可以根据需要自动运行的异步过程。rungeneratoronce正式这样的一个具体实现。事实上，生成器一般会生成Promise对象来告诉调用者要做的事情，而不是生成字符串来大声告诉他们。

    // 如果你已经理解了Promise的概念，现在又理解了生成器的概念，你可以尝试修改rungeneratoronce的代码来支持Promise。这个任务不简单，但是一旦成功，你将能够用Promise线性书写复杂的异步算法，而不仅仅通过.then()方法或回调函数来实现异步功能。
}

export default generators2;
