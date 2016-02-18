# -*- coding: utf-8 -*-

classmates = ['Michael','Bob','Tracy']

print(classmates)

print(len(classmates))

print(classmates[0])
print(classmates[1])
print(classmates[2])
# print(classmates[3])

print(classmates[-1])

classmates.append('Adim')

print(classmates)

classmates.insert(1,'Jack')

print(classmates)

classmates.pop()

print(classmates)

classmates.pop(1)

print(classmates)

classmates[1] = 'Sarah'

print(classmates)

L = ['Apple',123,True]

print(L)

s = ['python','java',['asp','php'],'scheme']

print(s)

p = ['asp','php']

s1 = ['python','java',p,'scheme']

print(s1)

p[1] = '.net'

print(s1)

s1[2][0] = 'aspp'

print(p)

L = [
    ['Apple', 'Google', 'Microsoft'],
    ['Java', 'Python', 'Ruby', 'PHP'],
    ['Adam', 'Bart', 'Lisa']
]

print(L[0][0])
print(L[1][1])
print(L[2][2])

t = (1,2)

print(t)

t = ()

print(t)

t = (1,)

print(t)

t = ('a','b',['A','B'])

print(t)

t[2][0] = 'X'
t[2][1] = 'Y'

print(t)

