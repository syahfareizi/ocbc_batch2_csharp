using System;

public class array
{
    public static void Main(string[] args)
    {
        string[] contoh = new string[4]{
            "Motherboard", "Processor", "Power Supply", "Video Card"
        };

        Console.WriteLine("Menampilkan setiap data pada array");
        Console.WriteLine("");

        foreach (string isicontoh in contoh)
        {
            Console.WriteLine($"Nama barang adalah : {isicontoh} ");
        }
        Console.Write("Press any key to continue ...");
    }
}