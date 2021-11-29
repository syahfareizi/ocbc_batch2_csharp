using System;

namespace program3
{
    class Program
    {
        static void Main(string[] args)
        {
            Pesawat pesawat = new Pesawat();
            Pswttempur pswttempur = new Pswttempur();

            pesawat.nama = "Helly";
            pesawat.jumlahRoda = 3;
            pesawat.ketinggian = "1000 Kaki";
            pesawat.jumlahPenumpang = "3 penumpang";
            pswttempur.nama = "AZ500TPU";
            pswttempur.jumlahRoda = 3;
            pswttempur.ketinggian = "3000 kaki";
            pswttempur.jumlahPenumpang = "1 orang Pilot";

            pesawat.terbang();
            pswttempur.terbangtinggi();
            Console.Read();
        }
    }
}
