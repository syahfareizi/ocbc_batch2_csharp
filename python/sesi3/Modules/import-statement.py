import person
from person import name
from person import devices
from person import name as p_name, devices as p_devices
print("")
print(person)
print("")
print(person.name)
print("")
print(person.display('Good Morning'))
person.devices = ['speaker', 'keyboard']
print("")
print(person.devices)
print("")
print(devices)

person.name = 'alex'
person.devices = ['tv', 'ac', 'speaker']
print("")
print(person.name)
print("")
print(person.devices)
print("")
print(p_name)
print("")
print(p_devices)