# DAFTAR FUNGSI
def celciustokelvin(suhuawal):
    '''Fungsi untuk mengkonversi suhu dari Celcius ke Kelvin'''
    suhukelvin = suhuawal + 273.15
    backToCelcius = suhukelvin - 273.15
    return {"celcius": suhuawal, "kelvin": suhukelvin, "newcelcius":backToCelcius}


def kelvintocelcius(suhuawal):
    '''Fungsi untuk mengkonversi suhu dari Kelvin ke Celcius'''
    suhucelcius = suhuawal - 273.15
    backToKelvin = suhucelcius + 273.15
    return {"kelvin": suhuawal, "celcius": suhucelcius, "newkelvin": backToKelvin}


def tofahrenheit(suhuawalcelcius, suhuawalkelvin):
    '''Fungsi untuk menkonversi suhu menuju Fahrenheit'''
    suhufahrenheit1 = ((9/5)*suhuawalcelcius)+32
    suhufahrenheit2 = (suhuawalkelvin - 273.15)*(9/5)+32
    return {"celcius": suhuawalcelcius, "kelvin": suhuawalkelvin, "celcius_to_fahrenheit": suhufahrenheit1, "kelvin_to_fahrenheit": suhufahrenheit2}


# APP HEADER
print("<---------------------------------------->")
print("SELAMAT DATANG PADA APLIKASI KONVERSI SUHU")
print("<---------------------------------------->")

# INPUT USER
suhuawal = input("Masukkan Suhu : ")
suhuawal_int = float(suhuawal)
hasilsuhu_kelvin = celciustokelvin(suhuawal_int)
hasilsuhu_celcius = kelvintocelcius(suhuawal_int)
hasilsuhu_fahrenheit = tofahrenheit(
    hasilsuhu_kelvin["celcius"], hasilsuhu_celcius["kelvin"])

# TAMPILAN
print("<---------------------------------------->")
print(celciustokelvin.__doc__)
print(hasilsuhu_kelvin)
print("<---------------------------------------->")
print(kelvintocelcius.__doc__)
print(hasilsuhu_celcius)
print("<---------------------------------------->")
print(tofahrenheit.__doc__)
print(hasilsuhu_fahrenheit)
