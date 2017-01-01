class Student(object):
    def __init__(self,name):
        self.name = name

    def __str__(self):
        return 'Student object (name: %s)' % self.name

    __repr__ = __str__

print(Student('Michael'))


# 如果一个类想被用于for ... in循环，类似list或tuple那样，就必须实现一个__iter__()方法，该方法返回一个迭代对象，然后，Python的for循环就会不断调用该迭代对象的__next__()方法拿到循环的下一个值，直到遇到StopIteration错误时退出循环。

class Fib(object):
    def __getitem__(self,n):

        if isinstance(n,int):
            a,b = 1,1
            for x in range(n):
                a,b = b,a+b
            return a
        if isinstance(n,slice):
            start = n.start
            stop = n.stop
            if start is None:
                start = 0
            a,b = 1,1
            L = []
            for x in range(stop):
                if x >= start:
                    L.append(a)
                a,b = b,a+b
            return L

    def __init__(self):
        self.a , self.b = 0,1

    def __iter__(self):
        return self

    def __next__(self):
        self.a,self.b = self.b,self.a + self.b
        if self.a > 100000:
            raise StopIteration()
        return self.a

# for n in Fib():
#     print(n)

f = Fib()
print(f[0])
print(f[10])
print(f[100])

print(list(range(100)))

print(f[0:5])


class Student2(object):
    def __init__(self,name):
        self.name = name

    def __call__(self):
        print('My name is %s.' % self.name)

s = Student2('cody')
s()

print(callable(Student('CODY')))
print(callable(Student2('CODY')))
