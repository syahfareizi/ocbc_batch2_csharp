# Function definition is here
def printme( str_input ):
   '''This prints a passed string into this function'''
   print(str_input)
 
# Now you can call printme function
printme("Hello")

# # This syntax will give you an error
# printme()


# Function definition is here
def calculate_rect(length, width):
  '''This function is used to calculate area of rectangle'''
  print('Area : ', length*width)

# Define parameters
length = 100
width = 20

# Call calculate_rect
calculate_rect(length, width)

# # This syntax will give you an error
# calculate_rect(length)