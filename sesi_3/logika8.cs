using System;

public class logika8
{
    public static void Main(string[] args)
    {
        int i = 0;
        do
        {
            Console.WriteLine("i = {0}", i);
            i++;

            if (i > 5)
            {
                break;
            }
        } while (i < 10);
    }
}