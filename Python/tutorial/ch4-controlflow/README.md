# if

也许最为人所知的语句类型就是 if 语句了. 例如:

```
>>> x = int(input("Please enter an integer: "))
Please enter an integer: 42
>>> if x < 0:
...      x = 0
...      print('Negative changed to zero')
... elif x == 0:
...      print('Zero')
... elif x == 1:
...      print('Single')
... else:
...      print('More')
...
More
```

这里可以有零个或多个 elif 分支, 而 else 是可选的. 关键字 ‘elif‘ 是 ‘else if’ 的缩写, 它可以有效避免过度缩进. if ... elif ... elif ... 序列是其它语言中 switch 或 case 语句的替代.

# for

Python 中的 for 语句与你在 C 或是 Pascal 中使用的略有不同. 不同于在 Pascal 中总是依据一个等差的数值序列迭代, 也不同于在 C 中允许用户同时定义迭代步骤和终止条件, Python 中的 for 语句在任意序列 (列表或者字符串) 中迭代时, 总是按照元素在序列中的出现顺序依次迭代.

```
>>> # 测试一些字符串:
... a = ['cat', 'window', 'defenestrate']
>>> for x in a:
...     print(x, len(x))
...
cat 3
window 6
defenestrate 12
```

在循环过程中修改被迭代的对象是不安全的 (这只可能发生在可变序列类型上,如列表).

若想在循环体内修改你正迭代的序列 (例如复制序列中选定的项), 最好是先制作一个副本. 但是,在序列上的迭代并不会自动隐式地创建一个副本.

而切片则让这种操作十分方便:

```
>>> for x in a[:]: # 制造整个列表的切片复本
...    if len(x) > 6: a.insert(0, x)
...
>>> a
['defenestrate', 'cat', 'window', 'defenestrate']
```

# range()

如果你需要一个数值序列, 使用内建函式 range() 会很方便. 它产生等差级数序列:

```
>>> for i in range(5):
...     print(i)
...
0
1
2
3
4
```

给出的终止点不会在生成的序列里; range(10) 生成 10 个值, 组成一个长度为10的合法序列. 可以让 range 的起始初值定为另一个数, 也可以指定一个不同的增量 (甚至可以为负; 有时这被称为 ‘步长’):

```
range(5, 10)
   5 through 9

range(0, 10, 3)
   0, 3, 6, 9

range(-10, -100, -30)
  -10, -40, -70
```

要对一个序列的索引进行迭代的话, 组合使用 range() 和 len():

```
>>> a = ['Mary', 'had', 'a', 'little', 'lamb']
>>> for i in range(len(a)):
...     print(i, a[i])
...
0 Mary
1 had
2 a
3 little
4 lamb
```

多数情况中, 用 enumerate() 函式更加方便

你想打印 range 时, 会奇怪:

```
>>> print(range(10))
range(0, 10)
```

在很多时候, 由 range() 返回的对象表现得就像一个列表, 但实际上它不是. 如果你对其进行迭代时, 它能返回所需要的连续项, 但实际上为了节省空间并没有真正地生成制造一个列表.

我们称这种对象叫做 iterable , 也就是说, 某些函式和构造器期望能从对象连续接收元素直至终结, 我们称这种对象叫做 iterable (可迭代的).

我们已经看到 for 语句就是这种迭代器 ( iterator ). list() 是另一个; 它从可迭代对象中生成列表:

```
>>> list(range(5))
[0, 1, 2, 3, 4]
```

# break continue else

break 语句, 像 C 里的一样, 跳出最小的 for 或 while 循环. 循环语句可以有一个 else 子句; 当循环因耗尽整个列表而终止时 (使用 for) 或者当条件变为假时 (使用 while), 它就会被执行, 但是, 如果循环因为 break 语句终止的话, 它不会被执行. 

```
>>> for n in range(2, 10):
...     for x in range(2, n):
...         if n % x == 0:
...             print(n, 'equals', x, '*', n//x)
...             break
...     else:
...         # 循环因为没有找到一个因数而停止
...         print(n, 'is a prime number')
...
2 is a prime number
3 is a prime number
4 equals 2 * 2
5 is a prime number
6 equals 2 * 3
7 is a prime number
8 equals 2 * 4
9 equals 3 * 3
```

与循环搭配使用时, else 子句的行为和它与 try 语句的搭配时相对于与 if 语句的搭配时有更多共性: try 语句的 else 子句在没有异常发生时被执行, 循环的 else 子句在没有 break 语句（正常结束）被执行.

continue 语句同样是从 C 语言借用的, 它终止当前迭代而进行循环的下一次迭代.

```
>>> for num in range(2, 10):
...     if num % 2 == 0:
...         print("Found an even number", num)
...         continue
...     print("Found a number", num)
Found an even number 2
Found a number 3
Found an even number 4
Found a number 5
Found an even number 6
Found a number 7
Found an even number 8
Found a number 9
```

# pass

pass 语句什么都不做. 当语法上需要一个语句, 但程序不要动作时, 就可以使用它. 例如:

```
>>> while True:
...     pass  # 忙等待键盘中断 (Ctrl+C)
...
```

一般也可以用于创建最小类:

```
>>> class MyEmptyClass:
...     pass
...
```

另一个使用 pass 的地方是, 作为函式或条件体的占位符, 当你在新代码工作时, 它让你能保持在更抽象的级别思考. pass 会被默默地被忽略:

```
>>> def initlog(*args):
...     pass   # 记得实现这里!
...
```

# 函数

我们可以创建函式来输出任意指定范围内的 菲波那契(Fibonacci) 数列:

```
>>> def fib(n):    # 打印 Fibonacci 序列到 n
...     """打印到 n 的 Fibonacci 序列."""
...     a, b = 0, 1
...     while a < n:
...         print(a, end=' ')
...         a, b = b, a+b
...     print()
...
>>> # 现在调用我们刚定义的函式:
... fib(2000)
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597
```

关键字 def 引入了一个函式 定义. 后面必须跟上函式名和在圆括号里的参数序列. 函式体从一行开始, 并且一定要缩进.

函式体的第一个语句可以是字串; 这个字串就是函式的文档字符串, 或称为 docstring. (可以在 文档字串 一节找到更多信息) 有很多能将文档字串自动转换为在线或可打印文档的工具, 或让用户在代码中交互地浏览它的工具; 在代码里加上文档字符串是一个好的实践, 因此, 请养成这个习惯.

执行 函式,会引入新的符号表(symbol table)用于该函式的局部变量. 更精确地说, 所有在函式中被赋值的变量和值都将存储在局部符号表中; 鉴于变量引用会首先在局部符号表里寻找, 然后才是闭包函式的局部符号表, 再然后是全局变量, 最后是内建名字表. 因此, 在函式中的尽管全局变量可以引用,但是不可直接赋值 (除非用 global 语句进行声明).

函式的实参在它被调用时被引入到这个函式的局部变量表; 因此, 参数是 按值 传递的 (值 总是对象的一个 引用 , 而不是对象本身的值). [1] 当一个函式调用另一个时, 对应这次调用,一个新的局部符号表就会被创建.

函式定义会在当前的符号表里引入该函式的名字. 函式名对应的值被解释器认定为自定义函式类型 函式名的值可以被赋予另一个名字, 使其也能作为函式使用. 这是常规的重命名机制:

```
>>> fib
<function fib at 10042ed0>
>>> f = fib
>>> f(100)
0 1 1 2 3 5 8 13 21 34 55 89
```

根据其它语言的经验, 你可能会指出 fib 不是一个函式, 而是一个程序, 因为它不返回值. 事实上, 即使没有 return 语句的函式也会返回一个值, 尽管这个值相当无聊. 这个值名为 None (它是个内建名字). 如果要唯一输出的值是 None, 那么解释器会正当的抑制这次返回. 如你实在想看看这个值,可以使用 print():

```
>>> fib(0)
>>> print(fib(0))
None
```

写个返回 Fibonacci 序列而不是打印输出的函式, 很简单:

```
>>> def fib2(n): # 放回直到 n 的 Fibonacci 序列
...     """返回一个列表, 包含直到 n 的 Fibonacci 序列."""
...     result = []
...     a, b = 0, 1
...     while a < n:
...         result.append(a)    # 见下文
...         a, b = b, a+b
...     return result
...
>>> f100 = fib2(100)    # 调用
>>> f100                # 输出结果
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
```

像往常一样, 这里介绍了一些 Python 特性:

* return 语句从函式中返回一个值. 没有表达式参数的 return 语句返回 None. 直到函式结束也没有 return 语句也返回 None.
* 语句 result.append(a) 调用了列表对象 result 的一个方法. 所谓 方法 就是 ‘属于’ 对象的函式, 调用形式为 obj.methodname, 在这里 obj 是某对象的名字 (这可能是个表达式), methodname 是此对象类型定义中一个方法的名字. 在不同类型中定义的方法是不同的. 不同类型中定义相同名字的方法不会引起歧义. (你可以定义自己的对象类型和方法, 参阅 类) 例子中的 append() 方法是为列表对象定义的; 能在列表的末尾添加新的元素. 在本例中, 等价于 result = result + [a], 但相对而言更加高效.

# 深入函式定义

函式定义时候可以带若干参数, 有三种可以组合使用的不同形式.

最有用的形式是为一个或更多参数指定默认值. 这样创建的函式调用时可以不用给足参数. 例如:

```
def ask_ok(prompt, retries=4, complaint='Yes or no, please!'):
    while True:
        ok = input(prompt)
        if ok in ('y', 'ye', 'yes'):
            return True
        if ok in ('n', 'no', 'nop', 'nope'):
            return False
        retries = retries - 1
        if retries < 0:
            raise IOError('refusenik user')
        print(complaint)
```

这个函式有以下几种合法调用形式:

* 仅给出强制的参数: ask_ok('Do you really want to quit?')
* 多出一个可选参数: ask_ok('OK to overwrite the file?', 2)
* 或给出所有参数: ask_ok('OK to overwrite the file?', 2, 'Come on, only yes or no!')

这个例子也引入了一个关键字, in 用以测试序列中是否包含某一值.

默认参数的值等于函式 定义域 中的值, 因此

```
i = 5

def f(arg=i):
    print(arg)

i = 6
f()
```

将打印 5.

重要警告: 默认参数的值只会被求一次值. 但这在默认参数是可变参数的情况下就不一样了, 如列表, 字典, 或大多类的对象时. 例如, 下面的函式在随后的调用中会累积参数值:

```
def f(a, L=[]):
    L.append(a)
    return L

print(f(1))
print(f(2))
print(f(3))
```

将会打印

```
[1]
[1, 2]
[1, 2, 3]
```

如果你不想让参数值被后来的调用共享, 你可以改写成这样:

```
def f(a, L=None):
    if L is None:
        L = []
    L.append(a)
    return L
```

函式也可以通过 keyword = value 形式的关键字参数来调用. 例如, 下面的函式:

```
def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
    print("-- This parrot wouldn't", action, end=' ')
    print("if you put", voltage, "volts through it.")
    print("-- Lovely plumage, the", type)
    print("-- It's", state, "!")
```

通过以下任一方法调用:

```
parrot(1000)
parrot(action = 'VOOOOOM', voltage = 1000000)
parrot('a thousand', state = 'pushing up the daisies')
parrot('a million', 'bereft of life', 'jump')
```

但如下的调用是非法的:

```
parrot()                     # 缺少必要的参数
parrot(voltage=5.0, 'dead')  # 在关键字后面跟着非关键字参数
parrot(110, voltage=220)     # 同一参数给了多个值
parrot(actor='John Cleese')  # 未知关键字
```

在函式调用时, 关键字参数必须跟在位置参数之后. 所有的关键字参数都必须与函式接受的形式参数匹配 (例如, actor 在函式 parrot 看来就是非法参数), 但他们的顺序是无关紧要的. 这条规则也适用于非可选参数 (例如, parrot(voltage=1000) 也可以的). 任何 形参 都不能多次接受传值. 下面的例子产生错误的原因正是违反了这一约定:

```
>>> def function(a):
...     pass
...
>>> function(0, a=0)
Traceback (most recent call last):
  File "<stdin>", line 1, in ?
TypeError: function() got multiple values for keyword argument 'a'
```

当最后一个形参的形式为 **name 时, 则排除其他的形参的值, 它将以字典 (参阅 映射类型——字典) 的形式包含所有剩余关键字参数. 这种调用可以与具有 *name 形式的形式参数 (在下一小节中介绍) 联合使用, 这种形参接受所有超出函式接受范围的位置参数. ( *name 必须在 **name 之前使用) 例如, 如果我们像这样定义一个函式:

```
def cheeseshop(kind, *arguments, **keywords):
    print("-- Do you have any", kind, "?")
    print("-- I'm sorry, we're all out of", kind)
    for arg in arguments:
        print(arg)
    print("-" * 40)
    keys = sorted(keywords.keys())
    for kw in keys:
        print(kw, ":", keywords[kw])
```

它可以如下地调用:

```
cheeseshop("Limburger", "It's very runny, sir.",
           "It's really very, VERY runny, sir.",
           shopkeeper="Michael Palin",
           client="John Cleese",
           sketch="Cheese Shop Sketch")
```

当然它将打印:

```
-- Do you have any Limburger ?
-- I'm sorry, we're all out of Limburger
It's very runny, sir.
It's really very, VERY runny, sir.
----------------------------------------
client : John Cleese
shopkeeper : Michael Palin
sketch : Cheese Shop Sketch
```

注意, 关键字参数名的列表是通过之前对字典 keys() 进行排序操作而创建的; 如果不这样做, 参数打印的顺序是不确定的.

最后, 最不常用的选择, 是指定函式能够在调用时接受任意数量的参数. 这些参数会被包装进一个元组 (参看 元组和序列). 在变长参数之前, 可以使用任意多个正常参数

```
def write_multiple_items(file, separator, *args):
    file.write(separator.join(args))
```

一般地, 这种 variadic 参数必须在形参列表的末尾, 因为它们将接收传递给函式的所有剩余输入参数. 任何出现在 *arg 之后的形式参数只能是关键字参数, 这意味着它们只能使用关键字参数的方式接收传值, 而不能使用位置参数.

也存在相反的情形: 当参数存在于一个既存的列表或者元组之中, 但却需要解包以若干位置参数的形式被函数调用. 例如, 内建的 range() 函数期望接收分别的开始和结束的位置参数. 如果它们不是分别可用 (而是同时存在于一个列表或者元组中), 下面是一个利用 *`-操作符解从列表或者元组中解包参数以供函数调用的例子:

```
>>> list(range(3, 6))            # 使用分离的参数正常调用
[3, 4, 5]
>>> args = [3, 6]
>>> list(range(*args))           # 通过解包列表参数调用
[3, 4, 5]
```

同样的, 字典可以通过 **-操作符来解包参数:

```
>>> def parrot(voltage, state='a stiff', action='voom'):
...     print("-- This parrot wouldn't", action, end=' ')
...     print("if you put", voltage, "volts through it.", end=' ')
...     print("E's", state, "!")
...
>>> d = {"voltage": "four million", "state": "bleedin' demised", "action": "VOOM"}
>>> parrot(**d)
-- This parrot wouldn't VOOM if you put four million volts through it. E's bleedin' demised !
```

根据大众的需要, 一些通常出现在诸如 Lisp 等函式编程语言中的特性也已被加入到了 Python. 使用关键字 lambda, 就可以创建短小的匿名函式. 这就是能返回它两个参数和的函式: lambda a, b: a+b. Lambda 形式可以在任意需要函式对象的地方使用. 语法上限制它们为单一的表达式. 像内嵌函式一样, lambda 形式可以引用当前域里的变量:

---

对于 Python, PEP 8 已经呈现了大多数项目遵循的风格; 它宣传了一种十分可读而悦目的代码风格. 每个 Python 开发者都应当在某个时刻阅读它; 这里为你萃取了最重要的几点:

使用 4-空格 缩进, 且没有制表符.

* 4 空格是在小缩进 (允许更多嵌套) 和大缩进 (更易读) 之间的好的妥协. 
  * 制表符会带来混乱, 最好不要使用.

* 设定自动换行 (Wrap),使它们不超过 79 个字符.
  * 这会帮助小屏幕的用户, 而且使得可以在大屏幕上同时显示几个代码文件成为可能.

* 使用空行分隔函式和类, 以及函式中的大的代码块.

* 尽可能令注释独占一行.

* 使用文档字串.

* 在操作符两边, 逗号后面使用空格, 但是括号内部与括号之间直接相连的部分不要空格: a = f(1, 2) + g(3, 4).

* 保持类名和函式名的一致性; 约定是, 类名使用 CamelCase 格式, 方法名和函式名使用 lower_case_with_underscres 形式. 永远使用 self 作为方法的第一个参数名 (参阅 类的初印象 获得更多有关类和方法的信息).

* 若代码打算用在国际化的环境中, 那么不要使用奇特的编码. Python 默认的 UTF-8, 或者甚至是简单的 ASCII 在任何情况下工作得最好.

* 同样地, 如果代码的读者或维护者只有很小的概率使用不同的语言, 那么不要在标识符里使用 非ASCII 字符.
