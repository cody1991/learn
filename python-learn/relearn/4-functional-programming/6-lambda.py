L = list(map(lambda x: x * x,[1,2,3,4,5,6]))
print(L)


f = lambda x : x*x

print(f)
print(f(5))

def build(x,y):
    return lambda: x * x + y * y

def build2(x,y):
    def g():
        return x * x +　y * y
    return g

print(build(1,2))
print(build(1,2)())
