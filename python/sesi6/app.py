def my_generator():
    print("Inside my generator")
    yield 'a'
    yield 'b'
    yield 'c'


char = my_generator()
print("\n----------------------------")
print(char.__next__())
print(char.__next__())
print(char.__next__())
print("\n----------------------------")
print(list(my_generator()))
print("\n----------------------------")
for char in my_generator():
    print(char)

print("----------------------------")


def counter_generator(low, high):
    while low <= high:
        yield low
        low += 1


for i in counter_generator(5, 10):
    print(i, end=' ')

print("\n----------------------------")


def say_hello(name):
    return f"Hello {name}"


def be_awesome(name):
    return f"Yo {name}, together we are the awesomest!"


def greet_bob(greeter_func):
    return greeter_func("Bob")


print(greet_bob(say_hello))

print("\n----------------------------")


def parent():
    print("Printing from the parent() function")

    def first_child():
        print("Printing from the first_child() function")

    def second_child():
        print("Printing from the second_child() function")

    first_child()
    second_child()


parent()

print("\n----------------------------")


def parent(num):
    def first_child():
        return "Hi, I am Emma"

    def second_child():
        return "Call me Liam"

    if num == 1:
        return first_child
    else:
        return second_child


first = parent(1)

print(first())

print("\n----------------------------")


def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper


@my_decorator
def say_whee():
    print("Whee!")


say_whee()

print("\n----------------------------")
