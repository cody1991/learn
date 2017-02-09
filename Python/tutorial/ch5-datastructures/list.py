a = [66.25, 333, 333, 1, 1234.5]

print(a.count(333), a.count(66.25), a.count('x'))
# 2 1 0

a.insert(2, -1)
print(a)

a.append(333)
print(a)

print(a.index(333))

a.remove(333)
print(a)

a.reverse()
print(a)

a.sort()
print(a)

vec = [2, 4, 6]

print([3 * x for x in vec])

print([[x, x**2] for x in vec])

freshfruit = ['     banana', '   loganberry ', 'passion fruit   ']
print([weapon.strip() for weapon in freshfruit])

print([3 * x for x in vec if x > 3])
print([3 * x for x in vec if x < 2])

print([(x, x**2) for x in vec])

vec1 = [2, 4, 6]
vec2 = [4, 3, -9]

print([x * y for x in vec1 for y in vec2])
print([x + y for x in vec1 for y in vec2])

print([vec1[i] * vec2[i] for i in range(len(vec1))])

print([str(round(355 / 113, i)) for i in range(1,6)])

mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

print([[row[i] for row in mat] for i in [0, 1, 2]])

print(*mat)
print(zip(*mat))
print(list(zip(*mat)))
