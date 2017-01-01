d = {
    'Michael':95,
    'Bob':75,
    'Tracy':85
}
print(d)

print('Tracy' in d)
print(d.get('Tracy'))
print(d.get('cody'))
print(d.get('cody',-1))

d.pop('Bob')
print(d)