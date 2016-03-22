print(range(1,11))
print(list(range(1,11)))

# 列表生成式
L = [x * x for x in range(1,11)]
print(L)

L = [x * x for x in range(1,11) if x % 2 == 0]
print(L)

L = [m + n for m in 'ABC' for n in 'XYZ']
print(L)


import os
print([d for d in os.listdir('.')])


d = {
    'x':'A',
    'y':'B',
    'z':'C'
}

for k,v in d.items():
    print(k,'=',v)

print([k + '=' + v for k,v in d.items()])

L = ['Hello','World','IBM']
L = [s.lower() for s in L]
print(L)