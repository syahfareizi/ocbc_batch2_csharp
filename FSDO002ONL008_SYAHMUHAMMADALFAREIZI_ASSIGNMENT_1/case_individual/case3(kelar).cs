using System;

public class case3
{
    private static void Main(string[] args)
    {
        int Angka;
        Console.Write("Masukkan Angka : ");
        Angka = int.Parse(Console.ReadLine());
        Console.WriteLine($"Factorial of {Angka} is : {faktorial(Angka)}");
    }
    private static int faktorial(int bilangan)
    {
        if (bilangan != 0)
        {
            return bilangan = bilangan * faktorial(bilangan - 1);
        }
        else
        {
            return 1;
        }
    }
}