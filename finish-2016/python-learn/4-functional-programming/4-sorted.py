print(sorted([36,5,-12,9,-21]))

print(sorted([36,5,-12,9,-21],key=abs))

print(sorted(['bob','about','Zoo','Credit']))

print(sorted(['bob','about','Zoo','Credit'],key=str.lower))

print(sorted(['bob','about','Zoo','Credit'],key=str.lower,reverse=True))


L = [('Bob', 75), ('Adam', 92), ('Bart', 66), ('Lisa', 88)]

def by_name(t):
    # key指定的函数abs将作用于list的每一个元素上
    return t[0].lower()

def by_score(t):
    return t[1]

L2 = sorted(L,key=by_name)
print(L2)

L2 = sorted(L,key=by_score,reverse=True)
print(L2)