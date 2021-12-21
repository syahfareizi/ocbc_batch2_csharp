import person as myPerson

print("")
print(myPerson.name)

print("")
print(dir(myPerson.name))

print("")
print(dir(myPerson))

def greetings():
    from person import display
    display('Good Morning')

print("")
print(greetings())    