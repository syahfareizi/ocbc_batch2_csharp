import sys

def os_interaction():
    assert ('linux' in sys.platform), "Function can only run on Linux systems."
    assert ('windows' in sys.platform), "This code runs on Windows only."
    print('Doing something.')

try:
    os_interaction()
except:
    pass


try:
    os_interaction()
except:
    print('Linux function was not executed')


try:
    os_interaction()
except AssertionError as error:
    print(error)
    print('The os_interaction() function was not executed')


# Here’s another example where you open a file and use a built-in exception:

try:
    with open('file.log') as file:
        read_data = file.read()
except:
    print('Could not open file.log')


try:
    with open('file.log') as file:
        read_data = file.read()
except FileNotFoundError as fnf_error:
    print(fnf_error)


try:
    os_interaction()
    with open('file.log') as file:
        read_data = file.read()
except FileNotFoundError as fnf_error:
    print(fnf_error)
except AssertionError as error:
    print(error)
    print('os_interaction() function was not executed')            