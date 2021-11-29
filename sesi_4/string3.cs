using System;

public class string3
{
    public static void Main(string[] args)
    {
        string[] str = { "ini", "adalah", "sebuah", "test", "." };
        Console.WriteLine("array asli :");

        for (var i = 0; i < str.Length; i++)
        {
            Console.Write(str[i] + " ");
        }
        Console.WriteLine("\n");

        str[1] = "merupakan";
        str[3] = "test, juga!";
        Console.WriteLine("array termodifikasi ");

        for (var i = 0; i < str.Length; i++)
        {
            Console.Write(str[i] + " ");
        }
        Console.WriteLine("\n");
    }
}