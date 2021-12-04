// pastikan install package prompt-sync dengan 'npm install prompt-sync'
const prompt = require('prompt-sync')();

// inisiasi variable
let angka1 = prompt (`Masukkan angka pertama :`)
let angka2 = prompt(`Masukkan angka kedua :`)

// penjumlahan
const penjumlahan = angka1 + angka2

// pengurangan 
const pengurangan = angka1 - angka2

// perkalian
const perkalian = angka1 * angka2

// pembagian
const pembagian = angka1/angka2

// modulus (sisa bagi)
const modulus = angka1%angka2

// increment
let angkabaru1 = angka1
const increment = ++angkabaru1

// decrement
let angkabaru2 = angka1
const decrement = --angkabaru2

// tampilan kalkulator
console.log(`=======================`)
console.log(`Selamat datang pada aplikasi\nkalkulator sederhana`)
console.log(`=======================`)
console.log(`Angka pertama adalah ${angka1}`)
console.log(`Angka kedua adalah ${angka2}`)

// tampilan hasil 
console.log(`=======================`)
console.log(`Berikut adalah hasil operasi matematika sederhana\ndari kedua bilangan tersebut :`)
console.log(`Penjumlahan dari angka pertama dan angka kedua ( angka pertama + angka kedua ): ${penjumlahan}`)
console.log(`Pengurangan dari angka pertama dan angka kedua ( angka pertama - angka kedua ): ${pengurangan}`)
console.log(`Perkalian dari angka pertama dan angka kedua ( angka pertama * angka kedua ): ${perkalian}`)
console.log(`Pembagian dari angka pertama dan angka kedua ( angka pertama / angka kedua ): ${pembagian}`)
console.log(`Sisa bagi dari angka pertama dan angka kedua ( angka pertama % angka kedua ): ${modulus}`)
console.log(`Increment pertama dari angka pertama ( angka pertama ++ ): ${increment}`)
console.log(`Decrement dari angka pertama ( angka pertama -- ): ${decrement}`)