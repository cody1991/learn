from datetime import datetime,timedelta

now = datetime.now()
print(now)

print(type(now))

dt = datetime(2015,4,19,12,20)
print(dt)

print(now.timestamp())

t = 1429478200.0
print(datetime.fromtimestamp(t))

cday = datetime.strptime('2015-6-1 18:19:59','%Y-%m-%d %H:%M:%S')
print(cday)

print(now.strftime('%a, %b %d %H:%M'))

print(now);
print(now + timedelta(hours=10))
print(now - timedelta(days=1))
print(now + timedelta(days=2,hours=12))