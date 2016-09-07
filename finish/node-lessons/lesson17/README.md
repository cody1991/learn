学习promise的基本概念。

* promise只有三种状态，未完成，完成(fulfilled)和失败(rejected)。

* promise的状态可以由未完成转换成完成，或者未完成转换成失败。

* promise的状态转换只发生一次

promise有一个then方法，then方法可以接受3个函数作为参数。前两个函数对应promise的两种状态fulfilled, rejected的回调函数。第三个函数用于处理进度信息。

    promiseSomething().then(function(fulfilled){
            //当promise状态变成fulfilled时，调用此函数
        },function(rejected){
            //当promise状态变成rejected时，调用此函数
        },function(progress){
            //当返回进度信息时，调用此函数
        });
