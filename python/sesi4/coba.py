file = open('Hack8_Sample_Text.txt')

file.close()

try:
   f = open("Hack8_Sample_Text.txt", encoding = 'utf-8')
   # perform file operations
finally:
   f.close()