Python的循环有两种，一种是for...in循环，依次把list或tuple中的每个元素迭代出来，看例子：

    names = ['Michael', 'Bob', 'Tracy']
    for name in names:
        print(name)

执行这段代码，会依次打印names的每一个元素：

    Michael
    Bob
    Tracy

所以for x in ...循环就是把每个元素代入变量x，然后执行缩进块的语句。

再比如我们想计算1-10的整数之和，可以用一个sum变量做累加：

    sum = 0
    for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
        sum = sum + x
    print(sum)

如果要计算1-100的整数之和，从1写到100有点困难，幸好Python提供一个range()函数，可以生成一个整数序列，再通过list()函数可以转换为list。比如range(5)生成的序列是从0开始小于5的整数：

    >>> list(range(5))
    [0, 1, 2, 3, 4]

range(101)就可以生成0-100的整数序列，计算如下：

    sum = 0
    for x in range(101):
        sum = sum + x
    print(sum)

第二种循环是while循环，只要条件满足，就不断循环，条件不满足时退出循环。比如我们要计算100以内所有奇数之和，可以用while循环实现：

    sum = 0
    n = 99
    while n > 0:
        sum = sum + n
        n = n - 2
    print(sum)

在循环内部变量n不断自减，直到变为-1时，不再满足while条件，循环退出。