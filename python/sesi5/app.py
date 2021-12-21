class Dog:
    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age


pets = [Dog('Alex', 4), Dog('Katak', 9)]

for i in pets:
    print(f"Nama Peliharaan: {i.name}")
    print(f"Umur Peliharaan: {i.age}")
