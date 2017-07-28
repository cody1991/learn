import sys
import time

f = None

try:
    f = open("io_file.txt")
    while True:
        line = f.readline()
        if len(line) == 0:
            break
        print(line,end="")
        # 另外要注意到我们在 print 之后使用了 sys.stout.flush()，以便它能被立即打印到屏幕上。
        sys.stdout.flush()
        print("Press ctrl+c now")
        time.sleep(2)
except IOError:
    print("Could not find file")
except KeyboardInterrupt:
    print("You cancelled the reading from the file")
finally:
    if f:
        f.close()
