[Demo](https://cody1991.github.io/learn/JavaScript30/6/index.html)

	const cityName = place.city.replace(regex, '<span class="hl">$&</span>')
	const stateName = place.city.replace(regex, `<span class="hl">$&</span>`)

---

其他方法

	console.info( str.replace(/\d{1,3}(?=(\d{3})+$)/g,function(s){
    return s+','
	}) )

---

给数字加分割点

	console.info( str.replace(/(\d{1,3})(?=(\d{3})+$)/g,function($1){
    return $1=$1+','
	}) )

	console.info( str.split("").reverse().join("").replace(/(\d{3})+?/g,function(s){
    return s+",";
	}).replace(/,$/,"").split("").reverse().join("") )

	function numberWithCommas(x) {
		// return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

说明

	\b 与一个字边界匹配，如er\b 与“never”中的“er”匹配，但与“verb”中的“er”不匹配。
	\B 非边界字匹配。

	The \B tells it to look only within a word boundary ,meaning it can't be part of another type of word - it can't be b123412b123, but only accept what it finds if it stands alone - 123456, a 123456 w

	(?=模式) 零宽正向先行断言，要求匹配与模式 匹配的搜索字符串。 找到一个匹配项后，将在匹配文本之前开始搜索下一个匹配项；但不会保存匹配项。

	Then a lookahead ?= tells it to find whatever is in the group (until it reaches the matching closing parenthesis) and only return if it is found as a whole, it is also making sure the replacement is done in reverse because it is looking as far ahead as to the end of the string.

	(?:模式) 与模式 匹配，但不保存匹配项(非捕获分组)。

	?: tells it to look for the following match but not create a backreference (a term in regular expressions)

	\d{3} looks for 3 digits in a row.

	Then the + afterwards marks that the 3 digits (wrapped in parentheses to make sure the rule is treated as one block like so - (\d{3})+) pattern can repeat (3 digits, 6, 9, etc)

	(?!模式) 零宽负向先行断言，要求匹配与模式 不匹配的搜索字符串。 找到一个匹配项后，将在匹配文本之前开始搜索下一个匹配项；但不会保存匹配项。

	The last (?!\d) looks for yet another digit but excluding it, making sure the digits are in groups of 3 and not followed by digits that are not in groups of 3.
	
	So basically it looks for 1 or more groups of 3 digits, telling the RegEx not to return the matched digits (because they're ignored with ?:) therefore returning only the part of the match that's not nothing - it's returning \B, and that's what's being replaced. So effectively it only replaces full groups of 3, starting from the end of the string, causing it to turn 3333333 into 3,333,333.

---

这里感觉最主要学习了 正则表达式

[正则表达式理论篇](https://aotu.io/notes/2016/11/17/regexp-theory/)

	$1、$2、...、$99 与 regexp 中的第 1 到第 99 个子表达式相匹配的文本。
	$&	与 regexp 相匹配的子串。
	$`	位于匹配子串左侧的文本。
	$'	位于匹配子串右侧的文本。
	$$	普通字符$。
	如：

	'abc'.replace(/b/g, "{$$$`$&$'}")
	// 结果为 "a{$abc}c"，即把b换成了{$abc}
