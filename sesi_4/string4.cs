using System;

public class string4
{
    public static void Main(string[] args)
    {
        string stringAwal = "C# membuat string mudah ";
        string substrng = stringAwal.Substring(5, 12);
        Console.WriteLine("string awal :" + stringAwal);
        Console.WriteLine("substring :" + substrng);

    }
}