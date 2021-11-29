using System;

public class logika4
{
    public static void Main(string[] args)
    {
        double nilai;
        Console.WriteLine("Masukkan angka : ");
        nilai = Convert.ToDouble(Console.ReadLine());

        if (nilai >= 85)
        {
            Console.WriteLine("Nilai anda adalah A");
        }
        else if (nilai >= 65)
        {
            Console.WriteLine("Nilai anda adalah B");
        }
        else if (nilai >= 45)
        {
            Console.WriteLine("Nilai anda adalah C");
        }
        else if (nilai >= 25)
        {
            Console.WriteLine("Nilai anda adalah D");
        }
        else
        {
            Console.WriteLine("Nilai anda Remidi");
        }

    }
}