# -*- coding: utf-8 -*-

print(ord('A'))
print(ord('哈'))

print(chr(66))

print('ABC'.encode('ascii'))
print('哈哈'.encode('utf-8'))

print(b'ABC'.decode('ascii'))
print(b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8'))

print(len('ABC'))
print(len('中文'))

print(len(b'ABC'))
print(len('中文'.encode('utf-8')))

print('Hello, %s' % 'world')
print('Hi, %s , you have $%d' % ('Michael',100000))

# %04d 0 表示要不要补0, 4 代表位数
# .2f 代表保留的小数位时
print('%2d-%04d' % (3,1))
print('%.2f' % 3.1415926)

print('growth rate:%d %%' % 7)