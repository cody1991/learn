# 但是，受到内存限制，列表容量肯定是有限的。而且，创建一个包含100万个元素的列表，不仅占用很大的存储空间，如果我们仅仅需要访问前面几个元素，那后面绝大多数元素占用的空间都白白浪费了。

# 所以，如果列表元素可以按照某种算法推算出来，那我们是否可以在循环的过程中不断推算出后续的元素呢？这样就不必创建完整的list，从而节省大量的空间。在Python中，这种一边循环一边计算的机制，称为生成器：generator。

# 要创建一个generator，有很多种方法。第一种方法很简单，只要把一个列表生成式的[]改成()，就创建了一个generator

L = [x * x for x in range(10)]
print(L)

g = (x * x for x in range(10))
print(g)

for n in g:
    print(n)


def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        print(b)
        a, b = b, a + b
        n = n + 1
    return 'done'

print('---------------------------')
fib(6)

def fib2(max):
    n,a,b = 0,0,1
    while n < max:
        yield b
        a,b = b,a+b
        n = n+1
    return 'done'

f = fib2(6)
print(f)

def odd():
    print('step 1')
    yield 1
    print('step 2')
    yield(3)
    print('step 3')
    yield(5)

o = odd()
next(o)
next(o)
next(o)

for n in fib2(100):
    print(n)

g = fib2(6)

while True:
    try:
        x = next(g)
        print('g:',x)
    except StopIteration as e:
        print('Generator return value:',e.value)
        break


# def triangles(max):
#     b = [1]
#     while len(b) < max:
#         yield(b)
#         b = [1] +   [   b[i] + b[i+1] for i in range(len(b) -1 )               ]                   + [1]

# for t in triangles(10):
#     print(t)

def triangles(num):
    b = [1]
    n = 0
    a = []
    while n < num:
        yield b
        for i in range(1,len(b)):
            a.append(b[i] + b[i-1])

        b = [1] + a + [1]
        a = []
        n = n + 1

for t in triangles(10):
    print(t)