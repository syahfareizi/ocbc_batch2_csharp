using System;

public class panjang3d
{
    public static void Main(string[] args)
    {
        int[,,] angka = new int[10, 5, 6];
        Console.WriteLine($"Panjang array angka adalah : {angka.Length}");
    }
}