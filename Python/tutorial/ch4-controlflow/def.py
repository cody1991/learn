def ask_ok(prompt,retries=4,complaint="Yes or no,please"):
  while True:
    ok = input(prompt)
    if ok in ('y', 'ye', 'yes'):
      return True
    if ok in ('n', 'no', 'nop', 'nope'):
      return False
    retries = retries - 1
    if retries < 0:
      raise IOError('refusenik user')
    print(complaint)

# ask_ok('Do you really want to quit?')
# ask_ok('Do you really want to quit?',2)
# ask_ok('Do you really want to quit?',2,'Come on, only yes or no!')

i = 5
def f(arg=i):
  print(arg)

i = 6
f()

def f(a, L = []):
  L.append(a)
  return L

print(f(1))
print(f(2))
print(f(3))

def f2(a, L = None):
  if L is None:
    L = []
  L.append(a)
  return L

print(f2(1))
print(f2(2))
print(f2(3))

def parrot(voltage, state = 'a stiff', action = 'voom', type = 'Norwegian Blue'):
  print("-- This parrot wouldn't", action, end = ' ')
  print("if you put", voltage, "volts through it.")
  print("-- Lovely plumage, the", type)
  print("-- It's", state, "!")

parrot(1000)
parrot(action = 'VOOOOOM', voltage = 100000)
parrot('a thousand', state = 'pushing up the daisies')
parrot('a million', 'bereft of life', 'jump')

def cheeseshop(kind, *arguments, **keywords):
  print("-- Do you have any", kind, "?")
  print("-- I'm sorry, we're all out of", kind)
  for arg in arguments:
    print(arg)
  print("-" * 40)
  keys = sorted(keywords.keys())
  # 排序，返回数组
  print(keys)
  for kw in keys:
    print(kw, ":", keywords[kw])

cheeseshop('Limburger',"It's very runny, sir.",
  "It's really very, very runny, sir.",
  shopkeeper="Michael Plain",
  client="John Cleese",
  sketch="Cheese Shop Sketch")

def concat(*args, sep="/"):
  return sep.join(args)

print(concat('earch', 'mars', 'venus'))

print(concat('earth','mars','vennus',sep="."))

print(list(range(3, 6)))

args = [3,6]

# TypeError: 'list' object cannot be interpreted as an integer
# print(list(range(args)))

print(*args) # 输出 3,6
print(list(range(*args)))

def parrot2(voltage, state = "a stiff", action = "voom"):
  print("-- This parrot wouldn't", action, end = ' ')
  print("if you put", voltage, "volts through it.", end = ' ')
  print("E's", state, "!")

d = {
  "voltage": "four million",
  "state": "bleedin' demised",
  "action": "Voom"
}

parrot2(**d)

def make_incremenetor(n):
  return lambda x: x + n

inc42 = make_incremenetor(42)

print(inc42(0))
print(inc42(11))
