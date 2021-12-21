# Example of Function Creation
# DOCSTRING PERLUUUUUUUUUUUUUu

def my_function(p, l):
    '''Function to calculate area of a square'''
    print(p * l)


def printme( str_input ):
   '''This prints a passed string into this function'''
   print(str_input)


# Function definition is here
def printme( str_input ):
   '''This prints a passed string into this function'''
   print(str_input)

# Now you can call printme function
print("")
my_function(5,6)
print("")
print(my_function(5,6).__doc__)
print("")
print(my_function.__doc__)
print("")
printme("I'm first call to user defined function!")
print("")
printme("Again second call to the same function")