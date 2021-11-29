using System;

public class case5
{
    public static void Main(string[] args)
    {
        string angkaawal;
        Console.WriteLine("Masukkan Angka :");
        angkaawal = Console.ReadLine();
        char[] angkaterbalik = new char[angkaawal.Length];
        for (int i = 1; i <= angkaawal.Length; i++)
        {
            angkaterbalik[i - 1] = angkaawal[i - 1];
        }
        foreach (var angka in angkaterbalik)
        {
            switch (angka)
            {
                case '1':
                    Console.Write("One ");
                    break;
                case '2':
                    Console.Write("Two ");
                    break;
                case '3':
                    Console.Write("Three ");
                    break;
                case '4':
                    Console.Write("Four ");
                    break;
                case '5':
                    Console.Write("Five ");
                    break;
                case '6':
                    Console.Write("Six ");
                    break;
                case '7':
                    Console.Write("Seven ");
                    break;
                case '8':
                    Console.Write("Eight ");
                    break;
                case '9':
                    Console.Write("Nine ");
                    break;
                case '0':
                    Console.Write("Zero ");
                    break;

                default:
                    Console.Write("Angka ? ");
                    break;
            }

        }
    }
}