##基础用法

可以用 v-model 指令在表单控件元素上创建双向数据绑定。根据控件类型它自动选取正确的方法更新元素。尽管有点神奇，v-model 不过是语法糖，在用户输入事件中更新数据，以及特别处理一些极端例子。

###Text

    <span>Message is: {{ message }}</span>
    <br>
    <input type="text" v-model="message" placeholder="edit me">

###Checkbox

单个勾选框，逻辑值

    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

多个勾选框，绑定到同一个数组：

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames | json }}</span>

###Radio

    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>

###select

    <select v-model="selected">
      <option selected>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>

多选（绑定到一个数组）：

    <select v-model="selected" multiple>
      <option selected>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br>
    <span>Selected: {{ selected | json }}</span>

动态选项，用 v-for 渲染：

    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>

##值绑定

对于单选按钮，勾选框及选择框选项，v-model 绑定的值通常是静态字符串（对于勾选框是逻辑值）：


    <!-- 当选中时，`picked` 为字符串 "a" -->
    <input type="radio" v-model="picked" value="a">

    <!-- `toggle` 为 true 或 false -->
    <input type="checkbox" v-model="toggle">

    <!-- 当选中时，`selected` 为字符串 "abc" -->
    <select v-model="selected">
      <option value="abc">ABC</option>
    </select>

但是有时我们想绑定值到 Vue 实例一个动态属性上。可以用 v-bind 做到。 而且 v-bind 允许绑定输入框的值到非字符串值。

###checkbox

    <input
      type="checkbox"
      v-model="toggle"
      v-bind:true-value="a"
      v-bind:false-value="b">

    // 选中
    vm.toggle === vm.a
    // 取消选中
    vm.toggle === vm.b

###radio

    <input type="radio" v-model="pick" v-bind:value="a">

    // 选中
    vm.pick === vm.a

###select options

    <select v-model="selected">
      <!-- 对象字面量 -->
      <option v-bind:value="{ number: 123 }">123</option>
    </select>

    // 选中
    typeof vm.selected // -> 'object'
    vm.selected.number // -> 123

##参考特性

###lazy

在默认情况下，v-model 在input 事件中同步输入框值与数据，可以添加一个特性 lazy，从而改到在 change 事件中同步：

    <!-- 在 "change" 而不是 "input" 事件中更新 -->
    <input v-model="msg" lazy>

###number

如果想自动将用户的输入保持为数字，可以添加一个特性 number：

    <input v-model="age" number>

###debounce

debounce 设置一个最小的延时，在每次敲击之后延时同步输入框的值与数据。如果每次更新都要进行高耗操作（例如在输入提示中 Ajax 请求），它较为有用。

    <input v-model="msg" debounce="500">

注意 debounce 参数不会延迟 input 事件：它延迟“写入”底层数据。因此在使用 debounce 时应当用 vm.$watch() 响应数据的变化。若想延迟 DOM 事件，应当使用 debounce 过滤器。