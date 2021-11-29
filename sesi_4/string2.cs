using System;
using System.Globalization;

public class string2
{
    public static void Main(string[] args)
    {
        string str1 = "Untuk pemprograman .net, C# adalah #1";
        string str2 = "Untuk pemprograman .net, C# adalah #1";
        string str3 = "string C# sangat tangguh ";
        string strAtas, strBawah;
        int hasil, idx;

        Console.WriteLine("str1: " + str1);
        Console.WriteLine("Panjang str1: " + str1.Length);
        strBawah = str1.ToLower(CultureInfo.CurrentCulture);
        strAtas = str1.ToUpper(CultureInfo.CurrentCulture);
        Console.WriteLine("Versi huruf kecil adalah :" + strBawah);
        Console.WriteLine("Versi huruf besar adalah :" + strAtas);
        Console.WriteLine(" ");

        Console.WriteLine("Menampilkan st1 per char :");
        for (var i = 0; i < str1.Length; i++)
        {
            Console.Write(str1[i] + " ");
        }
        Console.WriteLine("\n");

        if (str1 == str2)
        {
            Console.WriteLine("str1 == str2");
        }
        else
        {
            Console.WriteLine("str1 != str2");
        }

        if (str1 == str3)
        {
            Console.WriteLine("str1 == str2");
        }
        else
        {
            Console.WriteLine("str1 != str2");
        }
        hasil = string.Compare(str1, str3, StringComparison.CurrentCulture);
        if (hasil == 0)
        {
            Console.WriteLine("str1 dan str3 sama");
        }
        else if (hasil < 0)
        {
            Console.WriteLine("str1 kurang dari str3");
        }
        else
        {
            Console.WriteLine("str1 lebih besar dari str3");
        }
        Console.WriteLine("");

        str2 = "satu dua tiga satu";

        idx = str2.IndexOf("satu", StringComparison.Ordinal);
        Console.WriteLine("index kemunculan pertama dari satu adalah : " + idx);

        idx = str2.LastIndexOf("satu", StringComparison.Ordinal);
        Console.WriteLine("index kemunculan terakhir dari satu adalah : " + idx);

    }
}