def is_odd(n):
    return n % 2 == 1

l = list(filter(is_odd,[1,2,3,4,5,7,8,10,15]))

print(l)

def not_empty(s):
    return s and s.strip()

l = list(filter(not_empty,['A','','B',None,'C','  ']))

print(l)

def _odd_iter():
    n = 1
    while True:
        n = n + 2
        yield n

def _not_divisible(n):
    return lambda x : x % n > 0

def primes():
    yield 2
    it = _odd_iter()
    while True:
        n = next(it)
        yield n
        it = filter(_not_divisible(n),it)
        # 这个生成器先返回第一个素数2，然后，利用filter()不断产生筛选后的新的序列。

for n in primes():
    if n < 100:
        print(n)
    else:
        break

def is_palindrome(n):
    s = str(n)
    return s == s[::-1]

output = filter(is_palindrome,range(1,10000))
print(list(output))