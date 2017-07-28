shoplist = ['apple', 'mango', 'carrot', 'baana']

print('I have ', len(shoplist), ' items to purchase')

print("These items are:", end="")
for item in shoplist:
    print(item, end=" ")

shoplist.append('rice')

print(shoplist)

shoplist.sort()

print(shoplist)

del shoplist[0]

print(shoplist)
print('------------------')
print(shoplist[1:3])
print(shoplist[2:])
print(shoplist[1:-1])
print(shoplist[::1])
print(shoplist[::2])
print(shoplist[::3])
print(shoplist[::-1])

# help(list)

zoo = ('python', 'elephant', 'penguin')
print(len(zoo))
print(zoo)

new_zoo = 'monkey', 'camel', zoo
print(new_zoo)

print(len(new_zoo))
print(new_zoo[2])
print(new_zoo[2][2])
print(len(new_zoo) - 1 + len(new_zoo[2]))

ab = {
    'Swaroop': 'swaroop@swaroopch.com',
    'Larry': 'larry@wall.org',
    'Matsumoto': 'matz@ruby-lang.org',
    'Spammer': 'spammer@hotmail.com'
}

print(ab['Swaroop'])

print('There are {} contacts in the address'.format(len(ab)))

for name, address in ab.items():
    print('Contact {} at {}'.format(name, address))

if 'Swaroop' in ab:
    print(ab['Swaroop'])

bri = set(['brazil', 'russia', 'india'])

print('india' in bri)

bric = bri.copy()
bric.add('china')

print(bric.issuperset(bri))

bri.remove('russia')

print(bri)
print(bric)

print(bri & bric)

shoplist = ['apple','mango','carrot','banana']
mylist = shoplist

del shoplist[0]

print(shoplist)
print(mylist)

name = 'swaroop'

if name.startswith('swa'):
    print( 'Start with swa')

if 'a' in name:
    print('Contains A')

if name.find('war') != -1:
    print('Contains war')

delimiter = '_*_'

print(delimiter.join(mylist))
