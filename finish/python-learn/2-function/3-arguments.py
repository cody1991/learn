# 默认参数

def power(x,n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s

print(power(5))
print(power(5,3))

def enroll(name,gender,age=6,city='beijing'):
    print('name:',name)
    print('gender:',gender)
    print('age:',age)
    print('city:',city)

enroll('cody','f')
enroll('cody','f',8)
enroll('cody','f',city='shenzhen')

def add_end(L=None):
    if L is None:
        L = []
    L.append('END')
    print(L)

add_end([1,2,3])
add_end(['x','y','z'])

add_end()
add_end()
# Python函数在定义的时候，默认参数L的值就被计算出来了，即[]，因为默认参数L也是一个变量，它指向对象[]，每次调用该函数，如果改变了L的内容，则下次调用时，默认参数的内容就变了，不再是函数定义时的[]了。

#为什么要设计str、None这样的不变对象呢？因为不变对象一旦创建，对象内部的数据就不能修改，这样就减少了由于修改数据导致的错误。此外，由于对象不变，多任务环境下同时读取对象不需要加锁，同时读一点问题都没有。我们在编写程序时，如果可以设计一个不变对象，那就尽量设计成不变对象。

# 可变参数

def calc(numbers):
    sum = 0
    for n in numbers:
        sum = sum + n*n
    print(sum)

# 传入一个list或者tuple
calc([1,2,3])
calc((1,3,4,7))

# 定义可变参数和定义一个list或tuple参数相比，仅仅在参数前面加了一个*号。在函数内部，参数numbers接收到的是一个tuple，因此，函数代码完全不变。但是，调用该函数时，可以传入任意个参数，包括0个参数：
def calc2(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n*n
    print(sum)

calc2(1,2,3)
calc2(1,3,4,7)
calc2()

nums = [1,2,3]
# *nums表示把nums这个list的所有元素作为可变参数传进去。这种写法相当有用，而且很常见。
calc2(*nums)

# 关键字参数

# 可变参数允许你传入0个或任意个参数，这些可变参数在函数调用时自动组装为一个tuple。而关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict

def person(name,age,**kw):
    print('name:',name,'age:',age,'other:',kw)

person('Cody',20)
person('Cody',20,city='beijing')
person('Cody',20,gender='M',city='shenzhen')

extra = {
    'city':'Beijing',
    'job':'Engineer'
}
person('Jack',24,city=extra['city'],job=extra['job'])
# **extra表示把extra这个dict的所有key-value用关键字参数传入到函数的**kw参数，kw将获得一个dict，注意kw获得的dict是extra的一份拷贝，对kw的改动不会影响到函数外的extra。
person('Jack',24,**extra)


# 命名关键字参数

def person2(name,age,**kw):
    if 'city' in kw:
        pass
    if 'job' in kw:
        pass
    print('name:' , name , 'age:' , age, 'other:' , kw)

person2('Jack',24,city="beijing",addr="Chaoyang",zipcode=123456)

# 如果要限制关键字参数的名字，就可以用命名关键字参数，例如，只接收city和job作为关键字参数。这种方式定义的函数如下：

def person3(name,age,*,city,job):
    print(name,age,city,job)

person3('Jack',24,city="beijing",job="enginner")

# 命名关键字参数可以有缺省值，从而简化调用
def person4(name,age,*,city='beijing',job):
    print(name,age,city,job)

person4('jack',24,job='enginner')


# ----
# 参数定义的顺序必须是：必选参数、默认参数、可变参数/命名关键字参数和关键字参数。
# ----

def f1(a,b,c=0,*args,**kw):
    print('a=',a,'b=',b,'c=',c,'args=',args,'kw=',kw)

def f2(a,b,c=0,*,d,**kw):
    print('a=',a,'b=',b,'c=',c,'d=',d,'kw=',kw)

f1(1,2)
f1(1,2,c=3)
f1(1,2,3,'a','b')
f1(1,2,3,'a','b',x=99)
f2(1,2,d=99,ext=None)
f2(1,2,d=99,x='#')

args = (1,2,3,4)
kw = {
    'd':99,
    'x':'#'
}

f1(*args,**kw)

args = (1,2,3)
kw = {
    'd':88,
    'x':'#',
    'y':'20'
}
f2(*args,**kw)

# 所以，对于任意函数，都可以通过类似func(*args, **kw)的形式调用它，无论它的参数是如何定义的。