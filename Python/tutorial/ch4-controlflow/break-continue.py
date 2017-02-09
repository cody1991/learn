for n in range(2,10):
  for x in range(2,n):
    if n % x == 0:
      # 如果不用 // 会是一个浮点数
      print(n, 'equals',x,'*',n//x)
      break
  else:
    print(n,'is a prime number')

for num in range(2,10):
  if num % 2 == 0:
    print("Found an even number",num)
    continue
  print("Found a number",num)
