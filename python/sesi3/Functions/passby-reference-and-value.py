# Function definition is here
def changeme( mylist ):
   '''This changes a passed list into this function'''
   mylist = mylist+[1,2,3,4]
   print("\nValues inside the function : ", mylist)
   return mylist

# Now you can call changeme function
mylist = [10,20,30]
print("\nValues outside the function - before : ", mylist)
mylist = changeme( mylist )
print("\nValues outside the function - after  : ", mylist)


# Function definition is here
def changeme( mylist ):
   '''This changes a passed list into this function'''
   mylist = [1, 2, 3, 4] # This would assign new reference in mylist
   print("\nValues inside the function  : ", mylist)

# Now you can call changeme function
mylist = [10, 20, 30]
changeme( mylist )
print("\nValues outside the function : ", mylist)