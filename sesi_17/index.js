// ---- notes ----
// deklarsi menggunakan var, maka variable dapat diubah ubah namun sistemnya adalah variblenya ditimpa bukan valuenya yang dirubah 
// deklarasi menggunakan let, maka variabel dapat diubah namun yang diubah adalah value datanya sehingga tidak perlu mendeklare variable lagi dengan "var atau let"
// deklarasi varibale dengan const, maka variable tidak dapat diubah atau reassign 

// === berarti tipe data dan valuenya harus sama 
// == hanya valuenya yang sama 

//primitif
var angka = 12 //integer
var kata = "budi" //string
var benar = true //bool
var tidakAda = undefined // undefined

console.log(angka)
console.log(kata)
console.log(benar)
console.log(tidakAda)

// -------------

let angkaBaru = 13
angkaBaru = 12
console.log(angkaBaru)

// ---------------

const angkaConstant = 20
console.log(angkaConstant)

// math operation 

let angkaMath = 10
console.log(angkaMath)
angkaMath = 10**2
console.log(angkaMath)

// 

console.log(5 != 4)
console.log(5!=5)