# -*- coding: utf-8 -*-

import math

print(abs(100))

print(abs(-20))

# abs(20,20)

print(max(2,3,-1,5))

print(min(2,3,-10,3))

print(int('123'))

print(int(12.32))

print(float('12.42'))

print(float(12))

print(str(1.23))

print(str(100))

print(bool(1))

print(bool(''))

p = print

p('hello',123)

n1 = 255
n2 = 1000

print(str(hex(n1)))

print(str(hex(n2)))

def my_abs(x):
    if not isinstance(x,(int,float)):
        raise TypeError('bad operand type.')
    if x >= 0:
        return x
    else:
        return -x

print(my_abs(20))
print(my_abs(-20))
# print(my_abs('A'))

def move(x,y,step,angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx,ny

x,y = move(100,100,60,math.pi / 6)

print(x,y)

r = move(100,100,60,math.pi / 6)

print(r)

def quadratic(a,b,c):
    if b * b - 4 * a * c < 0:
        print('此方程无解')
    else:
        x1 = (-b + math.sqrt(b * b - 4 * a * c)) / (2 * a)
        x2 = (-b - math.sqrt(b * b - 4 * a * c)) / (2 * a)
        if(x1 == x2):
            print('此方程只有一个解 %.2f' % x1)
        else:
            print('此方程有两个解 %.2f , %.2f' % (x1,x2))

a = input('pls enter first number:')
b = input('pls enter second number:')
c = input('pls enter third number:')

a = int(a)
b = int(b)
c = int(c)

quadratic(a,b,c)