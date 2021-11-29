using System;

public class logika2
{
    public static void Main(string[] args)
    {
        int nilai = 75;

        if (nilai < 75)
        {
            Console.WriteLine("Nilai anda adalah C");
        }
        else if (nilai < 80)
        {
            Console.WriteLine("Nilai anda adalah B");
        }
        else if (nilai <= 100)
        {
            Console.WriteLine("Nilai anda adalah A");
        }
        else
        {
            Console.WriteLine("Nilai anda Remidi");
        }
    }
}