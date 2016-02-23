# 把函数作为参数传入，这样的函数称为高阶函数，函数式编程就是指这种高度抽象的编程范式。
def add(x,y,f):
    return f(x) + f(y)

print(add(-5,6,abs))