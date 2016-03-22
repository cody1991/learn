print(type(123))
print(type('str'))
print(type(None))
print(type(abs))


print(type(123) == type(456))
print(type(123) == int)

import types

def fn():
    pass

print(type(fn))
print(type(fn) == types.FunctionType)
print(type(abs) == types.BuiltinFunctionType)
print(type(lambda x:x) == types.LambdaType)
print( type(x for x in range(10))  == types.GeneratorType       ) 



print(isinstance('a',str))

print(isinstance([1, 2, 3], (list, tuple)))
print(isinstance((1, 2, 3), (list, tuple)))

print(dir('abc'))

print('ABC'.__len__())

class MyDog(object):
    # 类似__xxx__的属性和方法在Python中都是有特殊用途的，比如__len__方法返回长度。在Python中，如果你调用len()函数试图获取一个对象的长度，实际上，在len()函数内部，它自动去调用该对象的__len__()方法。剩下的都是普通属性或方法，比如lower()返回小写的字符串
    def __len__(self):
        return 100

dog = MyDog()
print(len(dog))

class MyObject(object):
    def __init__(self):
        self.x = 9
    def power(self):
        return self.x * self.x

obj = MyObject()

# 仅仅把属性和方法列出来是不够的，配合getattr()、setattr()以及hasattr()，我们可以直接操作一个对象的状态：

print(hasattr(obj,'x'))
print(hasattr(obj,'y'))
print(setattr(obj,'y',19))
print(hasattr(obj,'y'))

print(getattr(obj,'z',404))

print(hasattr(obj,'power'))
print(getattr(obj,'power'))


fn = getattr(obj,'power')
print(fn())