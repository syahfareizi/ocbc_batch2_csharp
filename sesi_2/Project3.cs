using System;

public class Project3
{
    public static void Main(string[] args)
    {
        string nama;
        int umur;

        Console.WriteLine(" ==== PROGRAM PENDAFTARAN PENDUDUK ==== ");
        Console.Write("Masukkan nama :");
        nama = Console.ReadLine();
        Console.Write("Masukkan Alamat :");
        var alamat = Console.ReadLine();
        Console.Write("Masukkan Umur :");
        umur = int.Parse(Console.ReadLine());

        Console.WriteLine();
        Console.WriteLine(" Terima kasih ");
        Console.WriteLine(" Data Berikut ");
        Console.WriteLine($"Nama : {nama}");
        Console.WriteLine($"Alamat : {alamat}");
        Console.WriteLine($"Umur : {umur} tahun ");
        Console.WriteLine("Sudah Disimpan");

    }
}