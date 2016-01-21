def normalize(name):
  return name.capitalize()

print('hello,world',100+200+300)

print(" 100 + 200 =" ,100+200)

L1 = ['adam','LISA','barT']
L2 = list(map(normalize,L1))
print(L2)

name = input('Please enter your name:')

print('hello,',name)