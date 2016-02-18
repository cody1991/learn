在详细探讨 Ajax 是什么之前，先让我们花几分钟了解 Ajax 做 什么。目前，编写应用程序时有两种基本的选择：

* 桌面应用程序
* Web应用程序

---
（下面可以简略过一遍，介绍桌面应用程序和Web应用程序）

两者是类似的，桌面应用程序通常以 CD 为介质（有时候可从网站下载）并完全安装到您的计算机上。桌面应用程序可能使用互联网下载更新，但运行这些应用程序的代码在桌面计算机上。Web 应用程序运行在某处的 Web 服务器上 —— 毫不奇怪，要通过 Web 浏览器访问这种应用程序。

不过，比这些应用程序的运行代码放在何处更重要的是，应用程序如何运转以及如何与其进行交互。桌面应用程序一般很快（就在您的计算机上运行，不用等待互联网连接），具有漂亮的用户界面（通常和操作系统有关）和非凡的动态性。可以单击、选择、输入、打开菜单和子菜单、到处巡游，基本上不需要等待。

另一方面，Web 应用程序是最新的潮流，它们提供了在桌面上不能实现的服务（比如 Amazon.com 和 eBay）。但是，伴随着 Web 的强大而出现的是等待，等待服务器响应，等待屏幕刷新，等待请求返回和生成新的页面。

显然这样说过于简略了，但基本的概念就是如此。您可能已经猜到，Ajax 尝试建立桌面应用程序的功能和交互性，与不断更新的 Web 应用程序之间的桥梁。可以使用像桌面应用程序中常见的动态用户界面和漂亮的控件，不过是在 Web 应用程序中。

---

###老技术，新技巧
（简单说下 ajax 应用场景，可以简略过一下）

在谈到 Ajax 时，实际上涉及到多种技术，要灵活地运用它必须深入了解这些不同的技术（本系列的头几篇文章将分别讨论这些技术）。好消息是您可能已经非常熟悉其中的大部分技术，更好的是这些技术都很容易学习，并不像完整的编程语言（如 Java 或 Ruby）那样困难。

* HTML 用于建立 Web 表单并确定应用程序其他部分使用的字段。
* JavaScript 代码是运行 Ajax 应用程序的核心代码，帮助改进与服务器应用程序的通信。
* DHTML 或 Dynamic HTML，用于动态更新表单。我们将使用 div、span 和其他动态 HTML 元素来标记 HTML。
* 文档对象模型 DOM 用于（通过 JavaScript 代码）处理 HTML 结构和（某些情况下）服务器返回的 XML。

我们来进一步分析这些技术的职责。以后的文章中我将深入讨论这些技术，目前只要熟悉这些组件和技术就可以了。对这些代码越熟悉，就越容易从对这些技术的零散了解转变到真正把握这些技术（同时也真正打开了 Web 应用程序开发的大门）。

###XMLHttpRequest 对象

这是一个 JavaScript 对象，创建该对象很简单

	<script language="javascript" type="text/javascript">
	var xmlHttp = new XMLHttpRequest();
	</script>

下一期文章中将进一步讨论这个对象，现在要知道这是处理所有服务器通信的对象。继续阅读之前，先停下来想一想：通过 XMLHttpRequest 对象与服务器进行对话的是 JavaScript 技术。这不是一般的应用程序流，这恰恰是 Ajax 的强大功能的来源。

在一般的 Web 应用程序中，用户填写表单字段并单击 Submit 按钮。然后整个表单发送到服务器，服务器将它转发给处理表单的脚本（通常是 PHP 或 Java，也可能是 CGI 进程或者类似的东西），脚本执行完成后再发送回全新的页面。该页面可能是带有已经填充某些数据的新表单的 HTML，也可能是确认页面，或者是具有根据原来表单中输入数据选择的某些选项的页面。当然，在服务器上的脚本或程序处理和返回新表单时用户必须等待。屏幕变成一片空白，等到服务器返回数据后再重新绘制。这就是交互性差的原因，用户得不到立即反馈，因此感觉不同于桌面应用程序。

Ajax 基本上就是把 JavaScript 技术和 XMLHttpRequest 对象放在 Web 表单和服务器之间。当用户填写表单时，数据发送给一些 JavaScript 代码而不是 直接发送给服务器。相反，JavaScript 代码捕获表单数据并向服务器发送请求。同时用户屏幕上的表单也不会闪烁、消失或延迟。换句话说，JavaScript 代码在幕后发送请求，用户甚至不知道请求的发出。更好的是，请求是异步发送的，就是说 JavaScript 代码（和用户）不用等待服务器的响应。因此用户可以继续输入数据、滚动屏幕和使用应用程序。

然后，服务器将数据返回 JavaScript 代码（仍然在 Web 表单中），后者决定如何处理这些数据。它可以迅速更新表单数据，让人感觉应用程序是立即完成的，表单没有提交或刷新而用户得到了新数据。JavaScript 代码甚至可以对收到的数据执行某种计算，再发送另一个请求，完全不需要用户干预！这就是 XMLHttpRequest 的强大之处。它可以根据需要自行与服务器进行交互，用户甚至可以完全不知道幕后发生的一切。结果就是类似于桌面应用程序的动态、快速响应、高交互性的体验，但是背后又拥有互联网的全部强大力量。

###加入一些 JavaScript

得到 XMLHttpRequest 的句柄后，其他的 JavaScript 代码就非常简单了。事实上，我们将使用 JavaScript 代码完成非常基本的任务：

* 获取表单数据：JavaScript 代码很容易从 HTML 表单中抽取数据并发送到服务器。
* 修改表单上的数据：更新表单也很简单，从设置字段值到迅速替换图像。
* 解析 HTML 和 XML：使用 JavaScript 代码操纵 DOM，处理 HTML 表单服务器返回的 XML 数据的结构。

例如：

	// Get the value of the "phone" field and stuff it in a variable called phone
	var phone = document.getElementById("phone").value;
	// Set some values on a form using an array called response
	document.getElementById("order").value = response[0];
	document.getElementById("address").value = response[1];

这里没有特别需要注意的地方，真是好极了！您应该认识到这里并没有非常复杂的东西。只要掌握了 XMLHttpRequest，Ajax 应用程序的其他部分就是如 清单 2 所示的简单 JavaScript 代码了，混合有少量的 HTML。同时，还要用一点儿 DOM，我们就来看看吧。

---

###获取Request对象

有了上面的基础知识后，我们来看看一些具体的例子。XMLHttpRequest 是 Ajax 应用程序的核心，而且对很多读者来说可能还比较陌生，我们就从这里开始吧。创建和使用这个对象非常简单，不是吗？等一等。

还记得几年前的那些讨厌的浏览器战争吗？没有一样东西在不同的浏览器上得到同样的结果。不管您是否相信，这些战争仍然在继续，虽然规模较小。但令人奇怪的是，XMLHttpRequest 成了这场战争的牺牲品之一。因此获得 XMLHttpRequest 对象可能需要采用不同的方法。下面我将详细地进行解释。

###使用 Microsoft 浏览器

（IE浏览器的随便过一下就好了）

Microsoft 浏览器 Internet Explorer 使用 MSXML 解析器处理 XML。因此如果编写的 Ajax 应用程序要和 Internet Explorer 打交道，那么必须用一种特殊的方式创建对象。

但并不是这么简单。根据 Internet Explorer 中安装的 JavaScript 技术版本不同，MSXML 实际上有两种不同的版本，因此必须对这两种情况分别编写代码。其中的代码在 Microsoft 浏览器上创建了一个 XMLHttpRequest。

	var xmlHttp = false;
	try {
	  xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
	  try {
	    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	  } catch (e2) {
	    xmlHttp = false;
	  }
	}

您对这些代码可能还不完全理解，但没有关系。当本系列文章结束的时候，您将对 JavaScript 编程、错误处理、条件编译等有更深的了解。现在只要牢牢记住其中的两行代码：

	xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
和

	xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");。

这两行代码基本上就是尝试使用一个版本的 MSXML 创建对象，如果失败则使用另一个版本创建该对象。不错吧？如果都不成功，则将 xmlHttp 变量设为 false，告诉您的代码出现了问题。如果出现这种情况，可能是因为安装了非 Microsoft 浏览器，需要使用不同的代码。

###处理 Mozilla 和非 Microsoft 浏览器

如果选择的浏览器不是 Internet Explorer，或者为非 Microsoft 浏览器编写代码，就需要使用不同的代码。事实上就是

	var xmlHttp = new XMLHttpRequest();

这行简单得多的代码在 Mozilla、Firefox、Safari、Opera 以及基本上所有以任何形式或方式支持 Ajax 的非 Microsoft 浏览器中，创建了 XMLHttpRequest 对象。

###结合起来
	
	以支持多种浏览器的方式创建 XMLHttpRequest 对象
	/* Create a new XMLHttpRequest object to talk to the Web server */
	var xmlHttp = false;
	try {
	  xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
	  try {
	    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	  } catch (e2) {
	    xmlHttp = false;
	  }
	}
	if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
	  xmlHttp = new XMLHttpRequest();
	}

这段代码的核心分为三步：

* 建立一个变量 xmlHttp 来引用即将创建的 XMLHttpRequest 对象。
* 尝试在 Microsoft 浏览器中创建该对象：
	* 尝试使用 Msxml2.XMLHTTP 对象创建它。
	* 如果失败，再尝试 Microsoft.XMLHTTP 对象。
	* 如果仍然没有建立 xmlHttp，则以非 Microsoft 的方式创建该对象。	
* 最后，xmlHttp 应该引用一个有效的 XMLHttpRequest 对象，无论运行什么样的浏览器。

---

###Ajax 世界中的请求/响应

现在我们介绍了 Ajax，对 XMLHttpRequest 对象以及如何创建它也有了基本的了解。如果阅读得很仔细，您可能已经知道与服务器上的 Web 应用程序打交道的是 JavaScript 技术，而不是直接提交给那个应用程序的 HTML 表单。

还缺少什么呢？到底如何使用 XMLHttpRequest。因为这段代码非常重要，您编写的每个 Ajax 应用程序都要以某种形式使用它，先看看 Ajax 的基本请求/响应模型是什么样吧。

###发出请求

您已经有了一个崭新的 XMLHttpRequest 对象，现在让它干点活儿吧。首先需要一个 Web 页面能够调用的 JavaScript 方法（比如当用户输入文本或者从菜单中选择一项时）。接下来就是在所有 Ajax 应用程序中基本都雷同的流程：

* 从 Web 表单中获取需要的数据。
* 建立要连接的 URL。
* 打开到服务器的连接。
* 设置服务器在完成后要运行的函数。
* 发送请求。

如下：

	function callServer() {
	  // Get the city and state from the web form
	  var city = document.getElementById("city").value;
	  var state = document.getElementById("state").value;
	  // Only go on if there are values for both fields
	  if ((city == null) || (city == "")) return;
	  if ((state == null) || (state == "")) return;
	  // Build the URL to connect to
	  var url = "/scripts/getZipCode.php?city=" + escape(city) + "&state=" + escape(state);
	  // Open a connection to the server
	  xmlHttp.open("GET", url, true);
	  // Setup a function for the server to run when it's done
	  xmlHttp.onreadystatechange = updatePage;
	  // Send the request
	  xmlHttp.send(null);
	}

其中大部分代码意义都很明确。开始的代码使用基本 JavaScript 代码获取几个表单字段的值。然后设置一个 PHP 脚本作为链接的目标。要注意脚本 URL 的指定方式，city 和 state（来自表单）使用简单的 GET 参数附加在 URL 之后。

然后打开一个连接，这是您第一次看到使用 XMLHttpRequest。其中指定了连接方法（GET）和要连接的 URL。最后一个参数如果设为 true，那么将请求一个异步连接（这就是 Ajax 的由来）。如果使用 false，那么代码发出请求后将等待服务器返回的响应。如果设为 true，当服务器在后台处理请求的时候用户仍然可以使用表单（甚至调用其他 JavaScript 方法）。

xmlHttp（要记住，这是 XMLHttpRequest 对象实例）的 onreadystatechange 属性可以告诉服务器在运行完成 后（可能要用五分钟或者五个小时）做什么。因为代码没有等待服务器，必须让服务器知道怎么做以便您能作出响应。在这个示例中，如果服务器处理完了请求，一个特殊的名为 updatePage() 的方法将被触发。

最后，使用值 null 调用 send()。因为已经在请求 URL 中添加了要发送给服务器的数据（city 和 state），所以请求中不需要发送任何数据。这样就发出了请求，服务器按照您的要求工作。

如果没有发现任何新鲜的东西，您应该体会到这是多么简单明了！除了牢牢记住 Ajax 的异步特性外，这些内容都相当简单。应该感激 Ajax 使您能够专心编写漂亮的应用程序和界面，而不用担心复杂的 HTTP 请求/响应代码。

上面的代码说明了 Ajax 的易用性。数据是简单的文本，可以作为请求 URL 的一部分。用 GET 而不是更复杂的 POST 发送请求。没有 XML 和要添加的内容头部，请求体中没有要发送的数据；换句话说，这就是 Ajax 的乌托邦。

不用担心，随着本系列文章的展开，事情会变得越来越复杂。您将看到如何发送 POST 请求、如何设置请求头部和内容类型、如何在消息中编码 XML、如何增加请求的安全性，可以做的工作还有很多！暂时先不用管那些难点，掌握好基本的东西就行了，很快我们就会建立一整套的 Ajax 工具库。

###处理响应

现在要面对服务器的响应了。现在只要知道两点：

* 什么也不要做，直到 xmlHttp.readyState 属性的值等于 4。
* 服务器将把响应填充到 xmlHttp.responseText 属性中。

其中的第一点，即就绪状态，将在下一篇文章中详细讨论，您将进一步了解 HTTP 请求的阶段，可能比您设想的还多。现在只要检查一个特定的值（4）就可以了（下一期文章中还有更多的值要介绍）。第二点，使用 xmlHttp.responseText 属性获得服务器的响应，这很简单。下面的示例方法可供服务器根据上面的代码中发送的数据调用。

	function updatePage() {
	  if (xmlHttp.readyState == 4) {
	    var response = xmlHttp.responseText;
	    document.getElementById("zipCode").value = response;
	  }
	}

这些代码同样既不难也不复杂。它等待服务器调用，如果是就绪状态，则使用服务器返回的值（这里是用户输入的城市和州的 ZIP 编码）设置另一个表单字段的值。于是包含 ZIP 编码的 zipCode 字段突然出现了，而用户没有按任何按钮！这就是前面所说的桌面应用程序的感觉。快速响应、动态感受等等，这些都只因为有了小小的一段 Ajax 代码。

细心的读者可能注意到 zipCode 是一个普通的文本字段。一旦服务器返回 ZIP 编码，updatePage() 方法就用城市/州的 ZIP 编码设置那个字段的值，用户就可以改写该值。这样做有两个原因：保持例子简单，说明有时候可能希望 用户能够修改服务器返回的数据。要记住这两点，它们对于好的用户界面设计来说很重要。

###连接 Web 表单

还有什么呢？实际上没有多少了。一个 JavaScript 方法捕捉用户输入表单的信息并将其发送到服务器，另一个 JavaScript 方法监听和处理响应，并在响应返回时设置字段的值。所有这些实际上都依赖于调用 第一个 JavaScript 方法，它启动了整个过程。最明显的办法是在 HTML 表单中增加一个按钮，但这是 2001 年的办法，您不这样认为吗？还是像 下面 这样利用 JavaScript 技术吧。

	<form>
	    <p>City:
	        <input type="text" name="city" id="city" size="25" onChange="callServer();" />
	    </p>
	    <p>State:
	        <input type="text" name="state" id="state" size="25" onChange="callServer();" />
	    </p>
	    <p>Zip Code:
	        <input type="text" name="zipCode" id="city" size="5" />
	    </p>
	</form>

如果感觉这像是一段相当普通的代码，那就对了，正是如此！当用户在 city 或 state 字段中输入新的值时，callServer() 方法就被触发，于是 Ajax 开始运行了。有点儿明白怎么回事了吧？好，就是如此！

###结束语

现在您可能已经准备开始编写第一个 Ajax 应用程序了。但可以首先从这些应用程序如何工作的基本概念开始，对 XMLHttpRequest 对象有基本的了解。在下一期文章中，您将掌握这个对象，学会如何处理 JavaScript 和服务器的通信、如何使用 HTML 表单以及如何获得 DOM 句柄。

现在先花点儿时间考虑考虑 Ajax 应用程序有多么强大。设想一下，当单击按钮、输入一个字段、从组合框中选择一个选项或者用鼠标在屏幕上拖动时，Web 表单能够立刻作出响应会是什么情形。想一想异步 究竟意味着什么，想一想 JavaScript 代码运行而且不等待 服务器对它的请求作出响应。会遇到什么样的问题？会进入什么样的领域？考虑到这种新的方法，编程的时候应如何改变表单的设计？

如果在这些问题上花一点儿时间，与简单地剪切/粘贴某些代码到您根本不理解的应用程序中相比，收益会更多。在下一期文章中，我们将把这些概念付诸实践，详细介绍使应用程序按照这种方式工作所需要的代码。因此，现在先享受一下 Ajax 所带来的可能性吧。