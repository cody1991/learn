from io import StringIO

f = StringIO()
f.write('hello')

print(f)
print(f.getvalue())

print(f.write(' '))

f = StringIO('Hello!\nHi!\nGoodbye!')

while True:
    s = f.readline()
    if s == '':
        break
    print(s.strip())

from io import BytesIO
f = BytesIO()
f.write('中文'.encode('utf-8'))

print(f.getvalue())

f = BytesIO(b'\xe4\xb8\xad\xe6\x96\x87')
print(f.read())