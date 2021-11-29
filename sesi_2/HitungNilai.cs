using System;

public class HitungNilai
{
    public static void Main(string[] args)
    {
        int pertama, kedua, ketiga, total;
        double rata;
        Console.WriteLine("== Menghitung nilai tengah ==");
        Console.Write("Masukkan nilai PERTAMA : ");
        pertama = int.Parse(Console.ReadLine());
        Console.Write("Masukkan nilai KEDUA : ");
        kedua = int.Parse(Console.ReadLine());
        Console.Write("Masukkan nilai KETIGA : ");
        ketiga = int.Parse(Console.ReadLine());

        total = pertama + kedua + ketiga;
        rata = total / 3.0;
        Console.WriteLine("Total nilai adalah: " + total);
        Console.WriteLine("rata rata nilai adalah: " + rata);
        Console.Read();

    }
}