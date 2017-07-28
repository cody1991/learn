class Person:
    def __init__(self, name):
        self.name = name

    def say_hi(self):
        print('Hello, how are you? My name is ', self.name)


p = Person('Cody')
p.say_hi()


class Robot:
    population = 0

    def __init__(self, name):
        self.name = name
        print("(Initializing {})".format(self.name))
        Robot.population += 1

    def die(self):
        print("{} is being destroyed!".format(self.name))

        Robot.population -= 1
        if Robot.population == 0:
            print("{} was the last one".format(self.name))
        else:
            print("There are still {:d} robots working.".format(Robot.population))

    def say_hi(self):
        print("Greetings, masters call me {}.".format(self.name))

    # how_many 实际上是一个属于类而非属于对象的方法。这就意味着我们可以将它定义为一个 classmethod（类方法） 或是一个 staticmethod（静态方法），这取决于我们是否知道我们需不需要知道我们属于哪个类。由于我们已经引用了一个类变量，因此我们使用 classmethod（类方法）。
    @classmethod
    def how_many(cls):
        print("We have {:d} robots".format(cls.population))


robot1 = Robot("R2-D2")
robot1.say_hi()
Robot.how_many()

robot2 = Robot("C-3PO")
robot2.say_hi()
Robot.how_many()

robot1.die()
robot2.die()

Robot.how_many()


class SchoolMember:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        print("(Initialized SchoolMember: {})".format(self.name))

    def tell(self):
        print('Name:"{}" Age:"{}"'.format(self.name, self.age))


class Teacher(SchoolMember):
    def __init__(self, name, age, salary):
        SchoolMember.__init__(self, name, age)
        self.salary = salary
        print("(Initialized Teacher: {})".format(self.name))

    def tell(self):
        SchoolMember.tell(self)
        print('Salary: "{:d}"'.format(self.salary))


class Student(SchoolMember):
    def __init__(self, name, age, marks):
        SchoolMember.__init__(self, name, age)
        self.marks = marks
        print("(Initialized Student: {})".format(self.name))

    def tell(self):
        SchoolMember.tell(self)
        print('Marks: "{:d}"'.format(self.marks))

t = Teacher('Mrs. Shrividya',40,30000)
s = Student('Cody',25,100)

print()

members = [t,s]
for member in members:
    member.tell()
