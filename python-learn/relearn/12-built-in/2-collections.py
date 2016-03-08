p = (1,2)

from collections import namedtuple

Point = namedtuple('Point',['x','y'])

# namedtuple是一个函数，它用来创建一个自定义的tuple对象，并且规定了tuple元素的个数，并可以用属性而不是索引来引用tuple的某个元素。

# 这样一来，我们用namedtuple可以很方便地定义一种数据类型，它具备tuple的不变性，又可以根据属性来引用，使用十分方便。

p = Point(1,2)

print(p.x)
print(p.y)


print(isinstance(p,Point))
print(isinstance(p,tuple))

Circle = namedtuple('Circle',['x','y','r'])

# 使用list存储数据时，按索引访问元素很快，但是插入和删除元素就很慢了，因为list是线性存储，数据量大的时候，插入和删除效率很低。

# deque是为了高效实现插入和删除操作的双向列表，适合用于队列和栈：

from collections import deque

q = deque(['a','b','c'])
q.append('x')
q.appendleft('y')
print(q)

# deque除了实现list的append()和pop()外，还支持appendleft()和popleft()，这样就可以非常高效地往头部添加或删除元素。

# 使用dict时，如果引用的Key不存在，就会抛出KeyError。如果希望key不存在时，返回一个默认值，就可以用defaultdict：

from collections import defaultdict
dd = defaultdict(lambda:'N/A')
dd['key1'] = 'abc'
print(dd['key1'])
print(dd['key2'])


# 使用dict时，Key是无序的。在对dict做迭代时，我们无法确定Key的顺序。

# 如果要保持Key的顺序，可以用OrderedDict：

from collections import OrderedDict

d = dict([('a', 1), ('b', 2), ('c', 3)])

print(d)

od = OrderedDict([('a', 1), ('b', 2), ('c', 3)])
print(od)

print(list(od.keys()))

from collections import Counter

c = Counter()
for ch in 'programming':
    c[ch] = c[ch] + 1

print(c)