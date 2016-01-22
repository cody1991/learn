# -*- coding: utf-8 -*-

age = 12
print('Your age is %d' % age)
if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')

birth = input('birth: ')
birth = int(birth)

if(birth < 2000):
    print('00前')
else:
    print('00后')

height = 1.7
weight = 65

bmi = weight / ( height * height)
print(bmi)
if bmi < 18.5:
    print('过轻')
elif bmi < 25:
    print('正常')
elif bmi < 28:
    print('过重')
elif bmi < 32:
    print('肥胖')
else:
    print('严重肥胖')