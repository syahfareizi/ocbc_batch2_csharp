class Dog:
    species = "Canis Familiaris"

    def __init__(self, name, age) -> None:
        self.name = name
        self.age = age

    def namahewan(self):
        return print(f"Nama Hewan Peliharaan ini adalah {self.name}")

    def umurhewan(self):
        return print(f"Umur Hewan Peliharaan ini adalah {self.age}")


class Cat(Dog):
    species = "Anggora"


pets = [Dog('Alex', 4), Dog('Katak', 9), Cat("Ketos", 10)]

for i in pets:
    print(f"Jenis Species Peliharaan: {i.species}")
    i.namahewan()
    i.umurhewan()
