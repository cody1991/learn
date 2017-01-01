##pluralize

###用法：

如果只有一个参数，复数形式只是简单地在末尾添加一个 “s”。如果有多个参数，参数被当作一个字符串数组，对应一个、两个、三个…复数词。如果值的个数多于参数的个数，多出的使用最后一个参数。

###示例：

    {{count}} {{count | pluralize 'item'}}

    1 => ‘1 item’
    2 => ‘2 items’

    {{date}}{{date | pluralize 'st' 'nd' 'rd' 'th'}}

    1 => ‘1st’
    2 => ‘2nd’
    3 => ‘3rd’
    4 => ‘4th’
    5 => ‘5th’

##json

输出经 JSON.stringify() 处理后的结果，而不是输出 toString() 的结果（如 [object Object]）。

{Number} [indent] - 默认值：2

以四个空格的缩进打印一个对象：

    <pre>{{ nestedObject | json 4 }}</pre>

##debounce

包装处理器，让它延迟执行 x ms， 默认延迟 300ms。包装后的处理器在调用之后至少将延迟 x ms， 如果在延迟结束前再次调用，延迟时长重置为 x ms。

    <input @keyup="onKeyup | debounce 500">

##limitBy

限制数组为开始 N 个元素，N 由第一个参数指定。第二个参数是可选的，指定开始的偏移量。

    <!-- 只显示开始 10 个元素 -->
    <div v-for="item in items | limitBy 10"></div>

    <!-- 显示第 5 到 15 元素-->
    <div v-for="item in items | limitBy 10 5"></div>

##filterBy

指令的值须是数组，如 v-for

参数：

    {String | Function} targetStringOrFunction
    "in" (optional delimiter)
    {String} [...searchKeys]

返回过滤后的数组。第一个参数可以是字符串或函数。

如果第一个参数是字符串，则在每个数组元素中搜索它：

    <div v-for="item in items | filterBy 'hello'">

在上例中，只显示包含字符串 "hello" 的元素。

如果 item 是一个对象，过滤器将递归地在它所有属性中搜索。为了缩小搜索范围，可以指定一个搜索字段：

    <div v-for="user in users | filterBy 'Jack' in 'name'">

在上例中，过滤器只在用户对象的 name 属性中搜索 "Jack"。为了更好的性能，最好始终限制搜索范围。

上例使用静态参数，当然可以使用动态参数作为搜索目标或搜索字段。配合 v-model 我们可以轻松实现输入提示效果：

    <div id="filter-by-example">
      <input v-model="name">
      <ul>
        <li v-for="user in users | filterBy name in 'name'">
          {{ user.name }}
        </li>
      </ul>
    </div>
    new Vue({
      el: '#filter-by-example',
      data: {
        name: '',
        users: [
          { name: 'Bruce' },
          { name: 'Chuck' },
          { name: 'Jackie' }
        ]
      }
    })

另一个示例：

多搜索字段：

    <li v-for="user in users | filterBy searchText in 'name' 'phone'"></li>

多搜索字段为一个动态数组：

    <!-- fields = ['fieldA', 'fieldB'] -->
    <div v-for="user in users | filterBy searchText in fields">

使用自定义过滤函数：

    <div v-for="user in users | filterBy myCustomFilterFunction">

##orderBy

指令的值须是数组，如 v-for

参数：

* {String} sortKey
* {String} [order] - 默认值：1

返回排序后的数组。sortKey 是用于排序的字段。可选参数 order 决定结果升序（order >= 0）或降序（order < 0）。

对于原始类型数组，sortKey 可以是任意的真值。

示例：

按名字排序用户：

    <ul>
      <li v-for="user in users | orderBy 'name'">
        {{ user.name }}
      </li>
    </ul>

降序：

    <ul>
      <li v-for="user in users | orderBy 'name' -1">
        {{ user.name }}
      </li>
    </ul>

原始类型数组：

    <ul>
      <li v-for="n in numbers | orderBy true">
        {{ n }}
      </li>
    </ul>
    
动态排序：

<div id="orderby-example">
  <button @click="order = order * -1">Reverse Sort Order</button>
  <ul>
    <li v-for="user in users | orderBy 'name' order">
      {{ user.name }}
    </li>
  </ul>
</div>
new Vue({
  el: '#orderby-example',
  data: {
    order: 1,
    users: [{ name: 'Bruce' }, { name: 'Chuck' }, { name: 'Jackie' }]
  }
})