[教程地址](http://www.cnblogs.com/TomXu/archive/2011/12/29/2290308.html)

在ECMAScript中，创建函数的最常用的两个方法是函数表达式和函数声明，两者期间的区别是有点晕，因为ECMA规范只明确了一点：函数声明必须带有标示符（Identifier）（就是大家常说的函数名称），而函数表达式则可以省略这个标示符：
	
	函数声明:
	
	function 函数名称 (参数：可选){ 函数体 }
		
	函数表达式：
		
	function 函数名称（可选）(参数：可选){ 函数体 }

所以，可以看出，如果不声明函数名称，它肯定是表达式，可如果声明了函数名称的话，如何判断是函数声明还是函数表达式呢？ECMAScript是通过上下文来区分的，如果function foo(){}是作为赋值表达式的一部分的话，那它就是一个函数表达式，如果function foo(){}被包含在一个函数体内，或者位于程序的最顶部的话，那它就是一个函数声明。

	function foo(){} // 声明，因为它是程序的一部分
	var bar = function foo(){}; // 表达式，因为它是赋值表达式的一部分
	
	new function bar(){}; // 表达式，因为它是new表达式
	
	(function(){
	  function bar(){} // 声明，因为它是函数体的一部分
	})();

还有一种函数表达式不太常见，就是被括号括住的(function foo(){})，他是表达式的原因是因为括号 ()是一个分组操作符，它的内部只能包含表达式，我们来看几个例子：

	  function foo(){} // 函数声明
	  (function foo(){}); // 函数表达式：包含在分组操作符内
	  
	  try {
	    (var x = 5); // 分组操作符，只能包含表达式而不能包含语句：这里的var就是语句
	  } catch(err) {
	    // SyntaxError
	  }

你可以会想到，在使用eval对JSON进行执行的时候，JSON字符串通常被包含在一个圆括号里：eval('(' + json + ')')，这样做的原因就是因为分组操作符，也就是这对括号，会让解析器强制将JSON的花括号解析成表达式而不是代码块。

	  try {
	    { "x": 5 }; // "{" 和 "}" 做解析成代码块
	  } catch(err) {
	    // SyntaxError
	  }
	  
	  ({ "x": 5 }); // 分组操作符强制将"{" 和 "}"作为对象字面量来解析

表达式和声明存在着十分微妙的差别，首先，函数声明会在任何表达式被解析和求值之前先被解析和求值，即使你的声明在代码的最后一行，它也会在同作用域内第一个表达式之前被解析/求值，参考如下例子，函数fn是在alert之后声明的，但是在alert执行的时候，fn已经有定义了：

	alert(fn());
	
	  function fn() {
	    return 'Hello world!';
	  }

另外，还有一点需要提醒一下，函数声明在条件语句内虽然可以用，但是没有被标准化，也就是说不同的环境可能有不同的执行结果，所以这样情况下，最好使用函数表达式：

	  // 千万别这样做！
	  // 因为有的浏览器会返回first的这个function，而有的浏览器返回的却是第二个
	
	  if (true) {
	    function foo() {
	      return 'first';
	    }
	  }
	  else {
	    function foo() {
	      return 'second';
	    }
	  }
	  foo();
	
	  // 相反，这样情况，我们要用函数表达式
	  var foo;
	  if (true) {
	    foo = function() {
	      return 'first';
	    };
	  }
	  else {
	    foo = function() {
	      return 'second';
	    };
	  }
	  foo();

函数声明的实际规则如下：

函数声明只能出现在程序或函数体内。从句法上讲，它们 不能出现在Block（块）（{ ... }）中，例如不能出现在 if、while 或 for 语句中。因为 Block（块） 中只能包含Statement语句， 而不能包含函数声明这样的源元素。另一方面，仔细看一看规则也会发现，唯一可能让表达式出现在Block（块）中情形，就是让它作为表达式语句的一部分。但是，规范明确规定了表达式语句不能以关键字function开头。而这实际上就是说，函数表达式同样也不能出现在Statement语句或Block（块）中（因为Block（块）就是由Statement语句构成的）。 

在ECMAScript的语法扩展中，有一个是函数语句，目前只有基于Gecko的浏览器实现了该扩展，所以对于下面的例子，我们仅是抱着学习的目的来看，一般来说不推荐使用（除非你针对Gecko浏览器进行开发）。

1.一般语句能用的地方，函数语句也能用，当然也包括Block块中：

	  if (true) {
	    function f(){ }
	  }
	  else {
	    function f(){ }
	  }
2.函数语句可以像其他语句一样被解析，包含基于条件执行的情形

	  if (true) {
	    function foo(){ return 1; }
	  }
	  else {
	    function foo(){ return 2; }
	  }
	  foo(); // 1
	  // 注：其它客户端会将foo解析成函数声明 
	  // 因此，第二个foo会覆盖第一个，结果返回2，而不是1

3.函数语句不是在变量初始化期间声明的，而是在运行时声明的——与函数表达式一样。不过，函数语句的标识符一旦声明能在函数的整个作用域生效了。标识符有效性正是导致函数语句与函数表达式不同的关键所在（下一小节我们将会展示命名函数表达式的具体行为）。

	// 此刻，foo还没用声明
	  typeof foo; // "undefined"
	  if (true) {
	    // 进入这里以后，foo就被声明在整个作用域内了
	    function foo(){ return 1; }
	  }
	  else {
	    // 从来不会走到这里，所以这里的foo也不会被声明
	    function foo(){ return 2; }
	  }
	  typeof foo; // "function"

不过，我们可以使用下面这样的符合标准的代码来模式上面例子中的函数语句：

	  var foo;
	  if (true) {
	    foo = function foo(){ return 1; };
	  }
	  else {
	    foo = function foo() { return 2; };
	  }

4.函数语句和函数声明（或命名函数表达式）的字符串表示类似，也包括标识符：

	  if (true) {
	    function foo(){ return 1; }
	  }
	  String(foo); // function foo() { return 1; }

5.另外一个，早期基于Gecko的实现（Firefox 3及以前版本）中存在一个bug，即函数语句覆盖函数声明的方式不正确。在这些早期的实现中，函数语句不知何故不能覆盖函数声明：

	 // 函数声明
	  function foo(){ return 1; }
	  if (true) {
	    // 用函数语句重写
	    function foo(){ return 2; }
	  }
	  foo(); // FF3以下返回1，FF3.5以上返回2
	  
	  // 不过，如果前面是函数表达式，则没用问题
	  var foo = function(){ return 1; };
	  if (true) {
	    function foo(){ return 2; }
	  }
	  foo(); // 所有版本都返回2

提到命名函数表达式，理所当然，就是它得有名字，前面的例子var bar = function foo(){};就是一个有效的命名函数表达式，但有一点需要记住：这个名字只在新定义的函数作用域内有效，因为规范规定了标示符不能在外围的作用域内有效：

	var f = function foo(){
	    return typeof foo; // foo是在内部作用域内有效
	  };
	  // foo在外部用于是不可见的
	  typeof foo; // "undefined"
	  f(); // "function"

既然，这么要求，那命名函数表达式到底有啥用啊？为啥要取名？

正如我们开头所说：给它一个名字就是可以让调试过程更方便，因为在调试的时候，如果在调用栈中的每个项都有自己的名字来描述，那么调试过程就太爽了，感受不一样嘛。

---

如果一个函数有名字，那调试器在调试的时候会将它的名字显示在调用的栈上。有些调试器（Firebug）有时候还会为你们函数取名并显示，让他们和那些应用该函数的便利具有相同的角色，可是通常情况下，这些调试器只安装简单的规则来取名，所以说没有太大价格，我们来看一个例子：

	 function foo(){
	    return bar();
	  }
	  function bar(){
	    return baz();
	  }
	  function baz(){
	    debugger;
	  }
	  foo();
	
	  // 这里我们使用了3个带名字的函数声明
	  // 所以当调试器走到debugger语句的时候，Firebug的调用栈上看起来非常清晰明了 
	  // 因为很明白地显示了名称
	  baz
	  bar
	  foo
	  expr_test.html()

过查看调用栈的信息，我们可以很明了地知道foo调用了bar, bar又调用了baz（而foo本身有在expr_test.html文档的全局作用域内被调用），不过，还有一个比较爽地方，就是刚才说的Firebug为匿名表达式取名的功能：

	 function foo(){
	    return bar();
	  }
	  var bar = function(){
	    return baz();
	  }
	  function baz(){
	    debugger;
	  }
	  foo();
	
	  // Call stack
	  baz
	  bar() //看到了么？ 
	  foo
	  expr_test.html()

然后，当函数表达式稍微复杂一些的时候，调试器就不那么聪明了，我们只能在调用栈中看到问号：

	  function foo(){
	    return bar();
	  }
	  var bar = (function(){
	    if (window.addEventListener) {
	      return function(){
	        return baz();
	      };
	    }
	    else if (window.attachEvent) {
	      return function() {
	        return baz();
	      };
	    }
	  })();
	  function baz(){
	    debugger;
	  }
	  foo();
	
	  // Call stack
	  baz
	  (?)() // 这里可是问号哦
	  foo
	  expr_test.html()

另外，当把函数赋值给多个变量的时候，也会出现令人郁闷的问题：

	 function foo(){
	    return baz();
	  }
	  var bar = function(){
	    debugger;
	  };
	  var baz = bar;
	  bar = function() { 
	    alert('spoofed');
	  };
	  foo();
	
	  // Call stack:
	  bar()
	  foo
	  expr_test.html()

这时候，调用栈显示的是foo调用了bar，但实际上并非如此，之所以有这种问题，是因为baz和另外一个包含alert('spoofed')的函数做了引用交换所导致的。

归根结底，只有给函数表达式取个名字，才是最委托的办法，也就是使用命名函数表达式。我们来使用带名字的表达式来重写上面的例子（注意立即调用的表达式块里返回的2个函数的名字都是bar）：

	  function foo(){
	    return bar();
	  }
	  var bar = (function(){
	    if (window.addEventListener) {
	      return function bar(){
	        return baz();
	      };
	    }
	    else if (window.attachEvent) {
	      return function bar() {
	        return baz();
	      };
	    }
	  })();
	  function baz(){
	    debugger;
	  }
	  foo();
	
	  // 又再次看到了清晰的调用栈信息了耶!
	  baz
	  bar
	  foo
	  expr_test.html()