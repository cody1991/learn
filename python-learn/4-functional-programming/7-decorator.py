def log(func):
    def wrapper(*args,**kw):
        print('call %s():' % func.__name__)
        return func(*args,**kw)
    return wrapper

@log
def now():
    print('2015-3-25')

f = now
f()

print(now.__name__)
print(f.__name__)
