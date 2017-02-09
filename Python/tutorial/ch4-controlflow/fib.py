def fib(n):
  """Print fibonacci of n.

  so great."""
  a, b = 0, 1
  while a < n:
    print(a, end=' ')
    a, b = b, a+b
  print()

fib(2000)
print(fib.__doc__)

f = fib
f(100)
print(f(100))

def fib2(n):
  result = []
  a, b = 0, 1
  while a < n:
    result.append(a)
    a, b = b, a + b
  return result

f100 = fib2(100)
print(f100)

