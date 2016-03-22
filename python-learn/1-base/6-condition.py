age = 3
if age >= 18:
    print('adult')
elif age >=6:
    print('teenager')
else:
    print('kid')

s = input('birth:')
# 输入的是字符串，先转成 int 数字类型
birth = int(s)
