using System;

public class case4
{
    public static void Main(string[] args)
    {
        string angkaawal;
        int x;
        Console.WriteLine("Masukkan Angka :");
        angkaawal = Console.ReadLine();
        char[] angkaterbalik = new char[angkaawal.Length];

        for (int i = 1; i <= angkaawal.Length; i++)
        {
            angkaterbalik[i - 1] = angkaawal[i - 1];
        }
        Console.Write("Reversed Number : ");
        for (var y = 1; y <= angkaterbalik.Length; y++)
        {
            x = angkaterbalik.Length - y;
            Console.Write(angkaterbalik[x]);
        }
    }
}