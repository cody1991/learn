# -*- coding: utf-8 -*-

d = {
    'Michael':95,
    'Bob':75,
    'Tracy':85
}

print(d['Michael'])

d['Adam'] = 67

print(d)

d['Adam'] = 82

print(d)

print('Adam' in d)

print('Adam1' in d)

print(d.get('Adam'))

print(d.get('Adam',-1))

print(d.get('Adam1',-1))

print(d.get('Adam1'))

s = set([2,1,1,1,3,3])

print(s)

s.add(3)

print(s)

s.add(4)

print(s)

s.remove(1)

print(s)

# s.remove(5)

s1 = set([1,2,3])
s2 = set([2,3,4])

print(s1 & s2)
print(s1 | s2)

# s3 = set([2,[2,3],4])

a = ['c','b','a']
a.sort()
print(a)

a = 'aabc'
b = a.replace('a','A')

print(a,b)