age = 20
name = 'cody'

print('\n \t{0} was {1} years old'.format(name,age))
print('why is {0} playing with that python?'.format(name))

# 对于浮点数 '0.333' 保留小数点(.)后三位
print('{0:.3f}'.format(1.0/3))

# 使用下划线填充文本，并保持文字处于中间位置
# 使用 (^) 定义 '___hello___'字符串长度为 11
print('{0:_^11}'.format('hello'),end=' ')

print('{name} wrote {book}'.format(name='cody',book='python'))

i = 5
print(i)

i = i + 1
print(i)

s = '''This is a multi-line string.
This is the second line.'''

print(s)

print(3**4)
print(13//3)
print(-13//3)
print(13%3)
print(-25.5%2.25)
print(25.5%2.25)
print(2<<2)
print(11>>1)
# 5 101
# 3 011

print(5&3)
print(5|3)
print(5^3)
print(~5) # -6 -（5+1）取反

#not and or

length = 5
breadth = 2
area = length * breadth
print('Area is', area)
print('Perimeter is ', 2 * (length + breadth))

# number = 23
# running = True
#
# while running:
#     guess = int(input('Enter an integer: '))
#     if guess == number:
#         print('Guessed it.')
#         running = False
#     elif guess < number:
#         print('Higher')
#     else:
#         print('Lower')
# else:
#     print('The while loop is over')

# range(1,5) [1,2,3,4]
# 另外需要注意的是，range() 每次只会生成一个数字，如果你希望获得完整的数字列表，要在使用 range() 时调用 list()。例如下面这样：list(range(5)) ，它将会返回 [0, 1, 2, 3, 4]。
for i in range(1,5):
    print(i)
else:
    print('The for loop is over')

for i in range(1,5,2):
    print(i)
else:
    print('The for loop is over')

# while True:
#     s = input("Enter something: ")
#     if s == 'quit':
#         break
#     if len(s) < 3:
#         print('Too small')
#         continue3
#     print('Length of the string is',len(s))

def say_hello():
    print('Hello world')

say_hello()

def print_max(a,b):
    if a > b:
        print(a, 'is max')
    elif a == b:
        print(a, 'is euqal to',b)
    else:
        print(b, 'is max')

print_max(3,4)


print_max(4,4)

x = 50
def func():
    global x
    print('x is ', x)
    x = 2
    print('Changed local x to ', x)

func()
print('x is still',x)

def say(message,times=1):
    print(message * times)

say('Hello')
say('World',5)

def func(a,b=5,c=10):
    print('a is',a,' and b is ', b, ' and c is ',c)

func(3,7)
func(25,c=24)
func(c=50,a=100)

# 当我们声明一个诸如 *param 的星号参数时，从此处开始直到结束的所有位置参数（Positional Arguments）都将被收集并汇集成一个称为“param”的元组（Tuple）。
# 类似地，当我们声明一个诸如 **param 的双星号参数时，从此处开始直至结束的所有关键字参数都将被收集并汇集成一个名为 param 的字典（Dictionary）。
def total(a=5,*numbers,**phonebook):
    print('a: ',a)

    for item in numbers:
        print('item: ', item)

    for first,second in phonebook.items():
        print(first, ' ',second)

total(10,1,2,3,Jack=1,John=2,Inge=3)

def max(x,y):
    '''Prints the maximum of two number.

        The tow values must be integers
    '''
    x = int(x)
    y = int(y)
    if x>y:
        return x
    elif x==y:
        return 'equal'
    else:
        return y

print(max(2,3))
print(max.__doc__)

help(max)
