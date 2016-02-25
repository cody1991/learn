class Animal(object):
    pass

class Mammal(Animal):
    pass

class Bird(Animal):
    pass

class RunnableMixIn(object):
    def run(self):
        print('Running...')

class FlyableMixIn(object):
    def fly(self):
        print('Flying...')

class Dog(Mammal,RunnableMixIn):
    pass

class Bat(Mammal,FlyableMixIn):
    pass

class Parrot(Bird,FlyableMixIn):
    pass

class Ostrich(Bird,RunnableMixIn):
    pass

# Python自带的很多库也使用了MixIn。举个例子，Python自带了TCPServer和UDPServer这两类网络服务，而要同时服务多个用户就必须使用多进程或多线程模型，这两种模型由ForkingMixIn和ThreadingMixIn提供。通过组合，我们就可以创造出合适的服务来。