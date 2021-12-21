f = open("sample.txt",'r',encoding = 'utf-8')

print('\nread the first 4 data')
print(f.read(4)) # read the first 4 data

print('\nread the next 4 data')
print(f.read(4))    # read the next 4 data

print('\nread in the rest till end of file')
print(f.read())     # read in the rest till end of file

print('\nfurther reading returns empty sting')
print(f.read())  # further reading returns empty sting

print('\nget the current file position')
print(f.tell())    # get the current file position

print('\nbring file cursor to initial position')
print(f.seek(0))   # bring file cursor to initial position

print('\nread the entire file')
print(f.read())  # read the entire file

print('\nbring file cursor to initial position and print all till end')
f.seek(0)   # bring file cursor to initial position
for line in f:
  print(line, end = '')

print('\nread individual lines of a file')
f.seek(0)
print(f.readline())

print('\nRead & print the entire file')
with open('sample.txt', 'r') as reader:
     # Read & print the entire file
     print(reader.read())