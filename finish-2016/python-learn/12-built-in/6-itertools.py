import itertools

# 迭代对象

natuals = itertools.count(1)

# for n in natuals:
#     print(n)

cs = itertools.cycle('ABC')
# for c in cs:
    # print(c)

ns = itertools.repeat('A',3)
for n in ns:
    print(n)

ns = itertools.takewhile(lambda x:x <=10,natuals)

print(list(ns))


for c in itertools.chain('ABC','XYZ'):
    print(c)

for key,group in itertools.groupby('AAABBBCCAAA'):
    print(key,list(group))

for key, group in itertools.groupby('AaaBBbcCAAa', lambda c: c.upper()):
    print(key, list(group))