using System;

public class case2
{
    public static void Main(string[] args)
    {
        Console.WriteLine("=== APLIKASI PENCETAK PIRAMIDA ANGKA ===");
        Console.WriteLine("Masukkan Jumlah bilangan :");
        int input = int.Parse(Console.ReadLine());
        int angka = 1;
        int baris, kolom, x, y;
        for (baris = 1; baris <= input; baris++)
        {
            //menambahkan whitespace
            for (kolom = input; kolom > baris; kolom--)
                Console.Write(" ");
            //mencetak angka hingga titik tengah tabel
            for (x = 1; x <= baris; x++)
            {
                Console.Write(angka);
                angka++;
            }
            angka--;
            for (y = 1; y < baris; y++)
            {
                angka--;
                Console.Write(angka);
            }
            Console.Write("\n");
            angka = 1;
        }
    }
}