using System;

public class length
{
    public static void Main(string[] args)
    {
        int[] angka = new int[10];
        Console.WriteLine($"Panjang array angka adalah : {angka.Length}");

        for (var i = 0; i < angka.Length; i++)
        {
            angka[i] = i * i;
        }
        Console.Write("Berikut adalah array angka : ");
        for (var i = 0; i < angka.Length; i++)
        {
            Console.Write(angka[i] + " ");
        }
        Console.WriteLine("");

    }
}