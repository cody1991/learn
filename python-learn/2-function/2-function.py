# -*- coding: utf-8 -*-

# def power(x):
#     return x * x


def power(x,n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s

def enroll(name,gender,age = 6,city = 'beijing'):
    print('name:',name)
    print('gender',gender)
    print('age',age)
    print('city',city)

print(power(4))
print(power(5,5))
enroll('Bob','M',7)
enroll('Adam','M',city='Tianjin')

def add_end(L=None):
    if L is None:
        L = []
    L.append('END')
    return L

print(add_end([1,2,3]))
print(add_end(['x','y','z']))

print(add_end())
print(add_end())

def calc(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum

# print(calc([1,2,3]))
print(calc(1,2,3))

num = [1,2,3]

print(calc(*num))

# def person(name,age,**kw):
#     if 'city' in kw:
#         pass
#     if 'job' in kw:
#         pass
#     print('name:',name,'age:',age,'otherL:',kw)

def person(name,age,*,city='Beijing',job):
    print(name,age,city,job)

person('Micheal',30,job="enginer")

person('Bob',35,city='Beijing',job="enginer")

# person('Adam',45,gender="M",job="Engineer")

extra = {'city':'Beijing','job':'Enginner'}

person('Jack',24,city=extra['city'],job=extra['job'])

person('Jack',24,**extra)

