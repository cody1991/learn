本系列的上一期文章中我们介绍了 Ajax 应用程序，考察了推动 Ajax 应用程序的基本概念。其中的核心是很多您可能已经了解的技术：JavaScript、HTML 和 XHTML、一点动态 HTML 以及 DOM（文档对象模型）。本文将放大其中的一点，把目光放到具体的 Ajax 细节上。
本文中，您将开始接触最基本和基础性的有关 Ajax 的全部对象和编程方法：XMLHttpRequest 对象。

###Web2.0一瞥

在深入研究代码之前首先看看最近的观点 —— 一定要十分清楚 Web 2.0 这个概念。听到 Web 2.0 这个词的时候，应该首先问一问 “Web 1.0 是什么？” 虽然很少听人提到 Web 1.0，实际上它指的就是具有完全不同的请求和响应模型的传统 Web。比如，到 Amazon.com 网站上点击一个按钮或者输入搜索项。就会对服务器发送一个请求，然后响应再返回到浏览器。该请求不仅仅是图书和书目列表，而是另一个完整的 HTML 页面。因此当 Web 浏览器用新的 HTML 页面重绘时，可能会看到闪烁或抖动。事实上，通过看到的每个新页面可以清晰地看到请求和响应。

Web 2.0（在很大程度上）消除了这种看得见的往复交互。比如访问 Google Maps 或 Flickr 这样的站点（到这些支持 Web 2.0 和 Ajax 站点的链接请参阅 参考资料）。比如在 Google Maps 上，您可以拖动地图，放大和缩小，只有很少的重绘操作。当然这里仍然有请求和响应，只不过都藏到了幕后。作为用户，体验更加舒适，感觉很像桌面应用程序。这种新的感受和范型就是当有人提到 Web 2.0 时您所体会到的。

需要关心的是如何使这些新的交互成为可能。显然，仍然需要发出请求和接收响应，但正是针对每次请求/响应交互的 HTML 重绘造成了缓慢、笨拙的 Web 交互的感受。因此很清楚，我们需要一种方法使发送的请求和接收的响应只 包含需要的数据而不是整个 HTML 页面。惟一需要获得整个新 HTML 页面的时候就是希望用户看到 新页面的时候。

但多数交互都是在已有页面上增加细节、修改主体文本或者覆盖原有数据。这些情况下，Ajax 和 Web 2.0 方法允许在不 更新整个 HTML 页面的情况下发送和接收数据。对于那些经常上网的人，这种能力可以让您的应用程序感觉更快、响应更及时，让他们不时地光顾您的网站。

###XMLHttpRequest 简介

要真正实现这种绚丽的奇迹，必须非常熟悉一个 JavaScript 对象，即 XMLHttpRequest。这个小小的对象实际上已经在几种浏览器中存在一段时间了，它是本专栏今后几个月中要介绍的 Web 2.0、Ajax 和大部分其他内容的核心。为了让您快速地大体了解它，下面给出将要用于该对象的很少的几个 方法和属性。

* open()：建立到服务器的新请求。
* send()：向服务器发送请求。
* abort()：退出当前请求。
* readyState：提供当前 HTML 的就绪状态。
* responseText：服务器返回的请求响应文本。

如果不了解这些（或者其中的任何 一个），您也不用担心，后面几篇文章中我们将介绍每个方法和属性。现在应该 了解的是，明确用 XMLHttpRequest 做什么。要注意这些方法和属性都与发送请求及处理响应有关。事实上，如果看到 XMLHttpRequest 的所有方法和属性，就会发现它们都 与非常简单的请求/响应模型有关。显然，我们不会遇到特别新的 GUI 对象或者创建用户交互的某种超极神秘的方法，我们将使用非常简单的请求和非常简单的响应。听起来似乎没有多少吸引力，但是用好该对象可以彻底改变您的应用程序。

####简单的new

首先需要创建一个新变量并赋给它一个 XMLHttpRequest 对象实例。这在 JavaScript 中很简单，只要对该对象名使用 new 关键字即可
	
	<script language="javascript" type="text/javascript">
	var request = new XMLHttpRequest();
	</script>

####错误处理

	<script language="javascript" type="text/javascript">
	var request = false;
	try {
	  request = new XMLHttpRequest();
	} catch (failed) {
	  request = false;
	}
	if (!request)
	  alert("Error initializing XMLHttpRequest!");
	</script>

一定要理解这些步骤：

* 创建一个新变量 request 并赋值 false。后面将使用 false 作为判定条件，它表示还没有创建 XMLHttpRequest 对象。
* 增加 try/catch 块：
	* 尝试创建 XMLHttpRequest 对象。
	* 如果失败（catch (failed)）则保证 request 的值仍然为 false。
* 检查 request 是否仍为 false（如果一切正常就不会是 false）。
如果出现问题（request 是 false）则使用 JavaScript 警告通知用户出现了问题。
* 代码非常简单，对大多数 JavaScript 和 Web 开发人员来说，真正理解它要比读写代码花更长的时间。现在已经得到了一段带有错误检查的 XMLHttpRequest 对象创建代码，还可以告诉您哪儿出了问题。

####增加对 Microsoft 浏览器的支持

	<script language="javascript" type="text/javascript">
	var request = false;
	try {
	  request = new XMLHttpRequest();
	} catch (trymicrosoft) {
	  try {
	    request = new ActiveXObject("Msxml2.XMLHTTP");
	  } catch (othermicrosoft) {
	    try {
	      request = new ActiveXObject("Microsoft.XMLHTTP");
	    } catch (failed) {
	      request = false;
	    }
	  }
	}
	if (!request)
	  alert("Error initializing XMLHttpRequest!");
	</script>

####将 XMLHttpRequest 创建代码移动到方法中

	<script language="javascript" type="text/javascript">
	var request;
	function createRequest() {
	  try {
	    request = new XMLHttpRequest();
	  } catch (trymicrosoft) {
	    try {
	      request = new ActiveXObject("Msxml2.XMLHTTP");
	    } catch (othermicrosoft) {
	      try {
	        request = new ActiveXObject("Microsoft.XMLHTTP");
	      } catch (failed) {
	        request = false;
	      }
	    }
	  }
	  if (!request)
	    alert("Error initializing XMLHttpRequest!");
	}
	</script>

####使用 XMLHttpRequest 的创建方法

	<script language="javascript" type="text/javascript">
	var request;
	function createRequest() {
	  try {
	    request = new XMLHttpRequest();
	  } catch (trymicrosoft) {
	    try {
	      request = new ActiveXObject("Msxml2.XMLHTTP");
	    } catch (othermicrosoft) {
	      try {
	        request = new ActiveXObject("Microsoft.XMLHTTP");
	      } catch (failed) {
	        request = false;
	      }
	    }
	  }
	  if (!request)
	    alert("Error initializing XMLHttpRequest!");
	}
	function getCustomerInfo() {
	  createRequest();
	  // Do something with the request variable
	}
	</script>

###用 XMLHttpRequest 发送请求

得到请求对象之后就可以进入请求/响应循环了。记住，XMLHttpRequest 惟一的目的是让您发送请求和接收响应。其他一切都是 JavaScript、CSS 或页面中其他代码的工作：改变用户界面、切换图像、解释服务器返回的数据。准备好 XMLHttpRequest 之后，就可以向服务器发送请求了。

####建立请求 URL

	<script language="javascript" type="text/javascript">
	   var request = false;
	   try {
	     request = new XMLHttpRequest();
	   } catch (trymicrosoft) {
	     try {
	       request = new ActiveXObject("Msxml2.XMLHTTP");
	     } catch (othermicrosoft) {
	       try {
	         request = new ActiveXObject("Microsoft.XMLHTTP");
	       } catch (failed) {
	         request = false;
	       }  
	     }
	   }
	   if (!request)
	     alert("Error initializing XMLHttpRequest!");
	   function getCustomerInfo() {
	     var phone = document.getElementById("phone").value;
	     var url = "/cgi-local/lookupCustomer.php?phone=" + escape(phone);
	   }
	</script>

#### Break Neck Pizza 表单

	<body>
	  <p><img src="breakneck-logo_4c.gif" alt="Break Neck Pizza" /></p>
	  <form action="POST">
	   <p>Enter your phone number:
	    <input type="text" size="14" name="phone" id="phone" 
	           onChange="getCustomerInfo();" />
	   </p>
	   <p>Your order will be delivered to:</p>
	   <div id="address"></div>
	   <p>Type your order in here:</p>
	   <p><textarea name="order" rows="6" cols="50" id="order"></textarea></p>
	   <p><input type="submit" value="Order Pizza" id="submit" /></p>
	  </form>
	 </body>

还要注意，当用户输入电话号码或者改变电话号码时，将触发 清单 8 所示的 getCustomerInfo() 方法。该方法取得电话号码并构造存储在 url 变量中的 URL 字符串。记住，由于 Ajax 代码是沙箱型的，因而只能连接到同一个域，实际上 URL 中不需要域名。该例中的脚本名为 /cgi-local/lookupCustomer.php。最后，电话号码作为 GET 参数附加到该脚本中："phone=" + escape(phone)。

如果以前没用见过 escape() 方法，它用于转义不能用明文正确发送的任何字符。比如，电话号码中的空格将被转换成字符 %20，从而能够在 URL 中传递这些字符。

可以根据需要添加任意多个参数。比如，如果需要增加另一个参数，只需要将其附加到 URL 中并用 “与”（&）字符分开 [第一个参数用问号（?）和脚本名分开]。

####打开请求

有了要连接的 URL 后就可以配置请求了。可以用 XMLHttpRequest 对象的 open() 方法来完成。该方法有五个参数：

* request-type：发送请求的类型。典型的值是 GET 或 POST，但也可以发送 HEAD 请求。
* url：要连接的 URL。
* asynch：如果希望使用异步连接则为 true，否则为 false。该参数是可选的，默认为 true。
* username：如果需要身份验证，则可以在此指定用户名。该可选参数没有默认值。
* password：如果需要身份验证，则可以在此指定口令。该可选参数没有默认值。

通常使用其中的前三个参数。事实上，即使需要异步连接，也应该指定第三个参数为 “true”。这是默认值，但坚持明确指定请求是异步的还是同步的更容易理解。

	function getCustomerInfo() {
	     var phone = document.getElementById("phone").value;
	     var url = "/cgi-local/lookupCustomer.php?phone=" + escape(phone);
	     request.open("GET", url, true);
	   }

一旦设置好了 URL，其他就简单了。多数请求使用 GET 就够了（后面的文章中将看到需要使用 POST 的情况），再加上 URL，这就是使用 open() 方法需要的全部内容了。

####发送请求

一旦用 open() 配置好之后，就可以发送请求了。幸运的是，发送请求的方法的名称要比 open() 适当，它就是 send()。

send() 只有一个参数，就是要发送的内容。但是在考虑这个方法之前，回想一下前面已经通过 URL 本身发送过数据了：

	var url = "/cgi-local/lookupCustomer.php?phone=" + escape(phone);

虽然可以使用 send() 发送数据，但也能通过 URL 本身发送数据。事实上，GET 请求（在典型的 Ajax 应用中大约占 80%）中，用 URL 发送数据要容易得多。如果需要发送安全信息或 XML，可能要考虑使用 send() 发送内容（本系列的后续文章中将讨论安全数据和 XML 消息）。如果不需要通过 send() 传递数据，则只要传递 null 作为该方法的参数即可。因此您会发现在本文中的例子中只需要这样发送请求

	function getCustomerInfo() {
	     var phone = document.getElementById("phone").value;
	     var url = "/cgi-local/lookupCustomer.php?phone=" + escape(phone);
	     request.open("GET", url, true);
	     request.send(null);
	   }

####指定回调方法

现在我们所做的只有很少一点是新的、革命性的或异步的。必须承认，open() 方法中 “true” 这个小小的关键字建立了异步请求。但是除此之外，这些代码与用 Java servlet 及 JSP、PHP 或 Perl 编程没有什么两样。那么 Ajax 和 Web 2.0 最大的秘密是什么呢？秘密就在于 XMLHttpRequest 的一个简单属性 onreadystatechange。

因为是异步请求，所以 JavaScript 方法（例子中的 getCustomerInfo()）不会等待服务器。因此代码将继续执行，就是说，将退出该方法而把控制返回给表单。用户可以继续输入信息，应用程序不会等待服务器。

这就提出了一个有趣的问题：服务器完成了请求之后会发生什么？答案是什么也不发生，至少对现在的代码而言如此！显然这样不行，因此服务器在完成通过 XMLHttpRequest 发送给它的请求处理之后需要某种指示说明怎么做。

现在 onreadystatechange 属性该登场了。该属性允许指定一个回调函数。回调允许服务器（猜得到吗？）反向调用 Web 页面中的代码。它也给了服务器一定程度的控制权，当服务器完成请求之后，会查看 XMLHttpRequest 对象，特别是 onreadystatechange 属性。然后调用该属性指定的任何方法。之所以称为回调是因为服务器向网页发起调用，无论网页本身在做什么。比方说，可能在用户坐在椅子上手没有碰键盘的时候调用该方法，但是也可能在用户输入、移动鼠标、滚动屏幕或者点击按钮时调用该方法。它并不关心用户在做什么。

这就是称之为异步的原因：用户在一层上操作表单，而在另一层上服务器响应请求并触发 onreadystatechange 属性指定的回调方法。

	function getCustomerInfo() {
	     var phone = document.getElementById("phone").value;
	     var url = "/cgi-local/lookupCustomer.php?phone=" + escape(phone);
	     request.open("GET", url, true);
	     request.onreadystatechange = updatePage;
	     request.send(null);
	   }

需要特别注意的是该属性在代码中设置的位置 —— 它是在调用 send()之前 设置的。发送请求之前必须设置该属性，这样服务器在回答完成请求之后才能查看该属性。现在剩下的就只有编写 updatePage() 方法了，这是本文最后一节要讨论的重点。

###处理服务器响应

发送请求，用户高兴地使用 Web 表单（同时服务器在处理请求），而现在服务器完成了请求处理。服务器查看 onreadystatechange 属性确定要调用的方法。除此以外，可以将您的应用程序看作其他应用程序一样，无论是否异步。换句话说，不一定要采取特殊的动作编写响应服务器的方法，只需要改变表单，让用户访问另一个 URL 或者做响应服务器需要的任何事情。这一节我们重点讨论对服务器的响应和一种典型的动作 —— 即时改变用户看到的表单中的一部分。

####回调和 Ajax

现在我们已经看到如何告诉服务器完成后应该做什么：将 XMLHttpRequest 对象的 onreadystatechange 属性设置为要运行的函数名。这样，当服务器处理完请求后就会自动调用该函数。也不需要担心该函数的任何参数。我们从一个简单的方法开始

	<script language="javascript" type="text/javascript">
	   var request = false;
	   try {
	     request = new XMLHttpRequest();
	   } catch (trymicrosoft) {
	     try {
	       request = new ActiveXObject("Msxml2.XMLHTTP");
	     } catch (othermicrosoft) {
	       try {
	         request = new ActiveXObject("Microsoft.XMLHTTP");
	       } catch (failed) {
	         request = false;
	       }  
	     }
	   }
	   if (!request)
	     alert("Error initializing XMLHttpRequest!");
	   function getCustomerInfo() {
	     var phone = document.getElementById("phone").value;
	     var url = "/cgi-local/lookupCustomer.php?phone=" + escape(phone);
	     request.open("GET", url, true);
	     request.onreadystatechange = updatePage;
	     request.send(null);
	   }
	   function updatePage() {
	     alert("Server is done!");
	   }
	</script>

它仅仅发出一些简单的警告，告诉您服务器什么时候完成了任务。在自己的网页中试验这些代码，然后在浏览器中打开（如果希望查看该例中的 XHTML）。输入电话号码然后离开该字段，将看到一个弹出的警告窗口，但是点击 OK 又出现了……

根据浏览器的不同，在表单停止弹出警告之前会看到两次、三次甚至四次警告。这是怎么回事呢？原来我们还没有考虑 HTTP 就绪状态，这是请求/响应循环中的一个重要部分。

####HTTP 就绪状态

前面提到，服务器在完成请求之后会在 XMLHttpRequest 的 onreadystatechange 属性中查找要调用的方法。这是真的，但还不完整。事实上，每当 HTTP 就绪状态改变时它都会调用该方法。这意味着什么呢？首先必须理解 HTTP 就绪状态。

HTTP 就绪状态表示请求的状态或情形。它用于确定该请求是否已经开始、是否得到了响应或者请求/响应模型是否已经完成。它还可以帮助确定读取服务器提供的响应文本或数据是否安全。在 Ajax 应用程序中需要了解五种就绪状态：

* 0：请求没有发出（在调用 open() 之前）。
* 1：请求已经建立但还没有发出（调用 send() 之前）。
* 2：请求已经发出正在处理之中（这里通常可以从响应得到内容头部）。
* 3：请求已经处理，响应中通常有部分数据可用，但是服务器还没有完成响应。
* 4：响应已完成，可以访问服务器响应并使用它。

与大多数跨浏览器问题一样，这些就绪状态的使用也不尽一致。您也许期望任务就绪状态从 0 到 1、2、3 再到 4，但实际上很少是这种情况。一些浏览器从不报告 0 或 1 而直接从 2 开始，然后是 3 和 4。其他浏览器则报告所有的状态。还有一些则多次报告就绪状态 1。在上一节中看到，服务器多次调用 updatePage()，每次调用都会弹出警告框 —— 可能和预期的不同！

对于 Ajax 编程，需要直接处理的惟一状态就是就绪状态 4，它表示服务器响应已经完成，可以安全地使用响应数据了。基于此，回调方法中的第一行应该如：

	function updatePage() {
	     if (request.readyState == 4)
	       alert("Server is done!");
	   }

修改后就可以保证服务器的处理已经完成。尝试运行新版本的 Ajax 代码，现在就会看到与预期的一样，只显示一次警告信息了。

####HTTP 状态码

如果服务器响应请求并完成了处理但是报告了一个错误怎么办？要知道，服务器端代码应该明白它是由 Ajax、JSP、普通 HTML 表单或其他类型的代码调用的，但只能使用传统的 Web 专用方法报告信息。而在 Web 世界中，HTTP 代码可以处理请求中可能发生的各种问题。

比方说，您肯定遇到过输入了错误的 URL 请求而得到 404 错误码的情形，它表示该页面不存在。这仅仅是 HTTP 请求能够收到的众多错误码中的一种。表示所访问数据受到保护或者禁止访问的 403 和 401 也很常见。无论哪种情况，这些错误码都是从完成的响应 得到的。换句话说，服务器履行了请求（即 HTTP 就绪状态是 4）但是没有返回客户机预期的数据。

因此除了就绪状态外，还需要检查 HTTP 状态。我们期望的状态码是 200，它表示一切顺利。如果就绪状态是 4 而且状态码是 200，就可以处理服务器的数据了，而且这些数据应该就是要求的数据（而不是错误或者其他有问题的信息）。因此还要在回调方法中增加状态检查

	   function updatePage() {
	     if (request.readyState == 4)
	       if (request.status == 200)
	         alert("Server is done!");
	   }

为了增加更健壮的错误处理并尽量避免过于复杂，可以增加一两个状态码检查

	function updatePage() {
	     if (request.readyState == 4)
	       if (request.status == 200)
	         alert("Server is done!");
	       else if (request.status == 404)
	         alert("Request URL does not exist");
	       else
	         alert("Error: status code is " + request.status);
	   }

现在将 getCustomerInfo() 中的 URL 改为不存在的 URL 看看会发生什么。应该会看到警告信息说明要求的 URL 不存在 —— 好极了！很难处理所有的错误条件，但是这一小小的改变能够涵盖典型 Web 应用程序中 80% 的问题。

####读取响应文本

现在可以确保请求已经处理完成（通过就绪状态），服务器给出了正常的响应（通过状态码），最后我们可以处理服务器返回的数据了。返回的数据保存在 XMLHttpRequest 对象的 responseText 属性中。

关于 responseText 中的文本内容，比如格式和长度，有意保持含糊。这样服务器就可以将文本设置成任何内容。比方说，一种脚本可能返回逗号分隔的值，另一种则使用管道符（即 | 字符）分隔的值，还有一种则返回长文本字符串。何去何从由服务器决定。

在本文使用的例子中，服务器返回客户的上一个订单和客户地址，中间用管道符分开。然后使用订单和地址设置表单中的元素值

	   function updatePage() {
	     if (request.readyState == 4) {
	       if (request.status == 200) {
	         var response = request.responseText.split("|");
	         document.getElementById("order").value = response[0];
	         document.getElementById("address").innerHTML =
	           response[1].replace(/\n/g, "
	");
	       } else
	         alert("status is " + request.status);
	     }
	   }

首先，得到 responseText 并使用 JavaScript split() 方法从管道符分开。得到的数组放到 response 中。数组中的第一个值 —— 上一个订单 —— 用 response[0] 访问，被设置为 ID 为 “order” 的字段的值。第二个值 response[1]，即客户地址，则需要更多一点处理。因为地址中的行用一般的行分隔符（“\n”字符）分隔，代码中需要用 XHTML 风格的行分隔符 `<br />` 来代替。替换过程使用 replace() 函数和正则表达式完成。最后，修改后的文本作为 HTML 表单 div 中的内部 HTML。

结束本文之前，我还要介绍 XMLHttpRequest 的另一个重要属性 responseXML。如果服务器选择使用 XML 响应则该属性包含（也许您已经猜到）XML 响应。处理 XML 响应和处理普通文本有很大不同，涉及到解析、文档对象模型（DOM）和其他一些问题。后面的文章中将进一步介绍 XML。但是因为 responseXML 通常和 responseText 一起讨论，这里有必要提一提。对于很多简单的 Ajax 应用程序 responseText 就够了，但是您很快就会看到通过 Ajax 应用程序也能很好地处理 XML。

###结束语

您可能对 XMLHttpRequest 感到有点厌倦了，我很少看到一整篇文章讨论一个对象，特别是这种简单的对象。但是您将在使用 Ajax 编写的每个页面和应用程序中反复使用该对象。坦白地说，关于 XMLHttpRequest 还真有一些可说的内容。下一期文章中将介绍如何在请求中使用 POST 及 GET，来设置请求中的内容头部和从服务器响应读取内容头部，理解如何在请求/响应模型中编码请求和处理 XML。

再往后我们将介绍常见 Ajax 工具箱。这些工具箱实际上隐藏了本文所述的很多细节，使得 Ajax 编程更容易。您也许会想，既然有这么多工具箱为何还要对底层的细节编码。答案是，如果不知道应用程序在做什么，就很难发现应用程序中的问题。

因此不要忽略这些细节或者简单地浏览一下，如果便捷华丽的工具箱出现了错误，您就不必挠头或者发送邮件请求支持了。如果了解如何直接使用 XMLHttpRequest，就会发现很容易调试和解决最奇怪的问题。只有让其解决您的问题，工具箱才是好东西。

因此请熟悉 XMLHttpRequest 吧。事实上，如果您有使用工具箱的 Ajax 代码，可以尝试使用 XMLHttpRequest 对象及其属性和方法重新改写。这是一种不错的练习，可以帮助您更好地理解其中的原理。
下一期文章中将进一步讨论该对象，探讨它的一些更有趣的属性（如 responseXML），以及如何使用 POST 请求和以不同的格式发送数据。

---

链接：

[HTTP状态码](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html?cm_mc_uid=79250328946114389264356&cm_mc_sid_50200000=1453289714)

---

成功的状态码：   
200 – 服务器成功返回网页   
304 – 未修改  
 
失败的状态码：   
404 – 请求的网页不存在   
503 – 服务器暂时不可用   
500 – 服务器内部错误  

###其他的状态码如下
 
####1xx（临时响应）

用于表示临时响应并需要请求者执行操作才能继续的状态代码。

100（Continue继续）     请求者应当继续提出请求。服务器返回此代码则意味着，服务器已收到了请求的第一部分，现正在等待接收其余部分。（HTTP 1.1新）   

101（Switching Protocols切换协议）    请求者已要求服务器切换协议，服务器已确认并准备进行切换。（HTTP 1.1新）  

####2xx（成功）

用于表示服务器已成功处理了请求的状态代码。


200（成功）     服务器已成功处理了请求。通常，这表示服务器提供了请求的网页。   
201（已创建）     请求成功且服务器已创建了新的资源。   
202（已接受）     服务器已接受了请求，但尚未对其进行处理。   
203（非授权信息）     服务器已成功处理了请求，但返回了可能来自另一来源的信息。   
204（无内容）     服务器成功处理了请求，但未返回任何内容。   
205（重置内容）     服务器成功处理了请求，但未返回任何内容。与 204 响应不同，此响应要求请求者重置文档视图（例如清除表单内容以输入新内容）。   
206（部分内容）     服务器成功处理了部分 GET 请求。 

####3xx（已重定向）

要完成请求，您需要进一步进行操作。通常，这些状态代码是永远重定向的。Google 建议每次请求时使用的重定向要少于 5 个。

300（多种选择）     服务器根据请求可执行多种操作。服务器可根据请求者 (User agent) 来选择一项操作，或提供操作列表供请求者选择。   
301（永久移动）     请求的网页已被永久移动到新位置。服务器返回此响应（作为对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。您应使用此代码通知 Googlebot 某个网页或网站已被永久移动到新位置。   
302（临时移动）     服务器目前正从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。此代码与响应 GET 和 HEAD 请求的 301 代码类似，会自动将请求者转到不同的位置。但由于 Googlebot 会继续抓取原有位置并将其编入索引，因此您不应使用此代码来通知 Googlebot 某个页面或网站已被移动。   
303（查看其他位置）     当请求者应对不同的位置进行单独的 GET 请求以检索响应时，服务器会返回此代码。对于除 HEAD 请求之外的所有请求，服务器会自动转到其他位置。   
304（未修改）     自从上次请求后，请求的网页未被修改过。服务器返回此响应时，不会返回网页内容。   
305（使用代理）     请求者只能使用代理访问请求的网页。如果服务器返回此响应，那么，服务器还会指明请求者应当使用的代理。   
307（临时重定向）     服务器目前正从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。此代码与响应 GET 和 HEAD 请求的 301 代码类似，会自动将请求者转到不同的位置。但由于 Googlebot 会继续抓取原有位置并将其编入索引，因此您不应使用此代码来通知 Googlebot 某个页面或网站已被移动。 

####4xx（请求错误）

这些状态代码表示，请求可能出错，已妨碍了服务器对请求的处理。

400（错误请求）     服务器不理解请求的语法。   
401（未授权）     请求要求进行身份验证。登录后，服务器可能会返回对页面的此响应。   
403（已禁止）     服务器拒绝请求。   
404（未找到）     服务器找不到请求的网页。例如，如果请求是针对服务器上不存在的网页进行的，那么，服务器通常会返回此代码。   
405（方法禁用）     禁用请求中所指定的方法。   
406（不接受）     无法使用请求的内容特性来响应请求的网页。   
407（需要代理授权）     此状态代码与 401（未授权）类似，但却指定了请求者应当使用代理进行授权。如果服务器返回此响应，那么，服务器还会指明请求者应当使用的代理。   
408（请求超时）     服务器等候请求时超时。   
409（冲突）     服务器在完成请求时发生冲突。服务器必须包含有关响应中所发生的冲突的信息。服务器在响应与前一个请求相冲突的 PUT 请求时可能会返回此代码，同时会提供两个请求的差异列表。   
410（已删除）     如果请求的资源已被永久删除，那么，服务器会返回此响应。该代码与 404（未找到）代码类似，但在资源以前有但现在已经不复存在的情况下，有时会替代 404 代码出现。如果资源已被永久删除，那么，您应当使用 301 代码指定该资源的新位置。   
411（需要有效长度）     服务器不会接受包含无效内容长度标头字段的请求。   
412（未满足前提条件）     服务器未满足请求者在请求中设置的其中一个前提条件。   
413（请求实体过大）     服务器无法处理请求，因为请求实体过大，已超出服务器的处理能力。   
414（请求的 URI 过长）     请求的 URI（通常为网址）过长，服务器无法进行处理。   
415（不支持的媒体类型）     请求的格式不受请求页面的支持。   
416（请求范围不符合要求）     如果请求是针对网页的无效范围进行的，那么，服务器会返回此状态代码。   
417（未满足期望值）     服务器未满足”期望”请求标头字段的要求。 

####5xx（服务器错误）

这些状态代码表示，服务器在尝试处理请求时发生内部错误。这些错误可能是服务器本身的错误，而不是请求出错。

500（服务器内部错误）     服务器遇到错误，无法完成请求。   
501（尚未实施）     服务器不具备完成请求的功能。例如，当服务器无法识别请求方法时，服务器可能会返回此代码。   
502（错误网关）     服务器作为网关或代理，从上游服务器收到了无效的响应。   
503（服务不可用）     目前无法使用服务器（由于超载或进行停机维护）。通常，这只是一种暂时的状态。   
504（网关超时）     服务器作为网关或代理，未及时从上游服务器接收请求。   
505（HTTP 版本不受支持）     服务器不支持请求中所使用的 HTTP 协议版本。 