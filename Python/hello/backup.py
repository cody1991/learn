import os
import time

source = [r"C:\Users\codytang\PycharmProjects\hello"]

target_dir = r"C:\Users\codytang\Desktop\backup"

today = target_dir + os.sep + time.strftime('%Y%m%d')
now = time.strftime('%H%M%S')

comment = input('Enter a comment --->')

if len(comment) == 0:
    target = today + os.sep + now + '.zip'
else:
    target = today + os.sep + now + '_' + comment.replace(' ', '_') + '.zip'

if not os.path.exists(today):
    os.mkdir(today)

zip_commmand = 'zip -r {0} {1}'.format(target, ' '.join(source))

print('Zip command is: ')
print(zip_commmand)

print('Runnung: ')
if os.system(zip_commmand) == 0:
    print('Successful backup to', target)
else:
    print('Backup failded')
