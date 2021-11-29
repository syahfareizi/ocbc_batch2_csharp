using System;

public class case1
{
    public static void Main(string[] args)
    {
        char abjad1 = 'A';
        int baris1, kolom1, x1, y1;
        for (baris1 = 1; baris1 <= 6; baris1++)
        {
            for (kolom1 = 6; kolom1 > baris1; kolom1--)
                Console.Write(" ");
            for (x1 = 1; x1 <= baris1; x1++)
            {
                Console.Write(abjad1);
                abjad1++;
            }
            abjad1--;
            for (y1 = 1; y1 < baris; y1++)
            {
                abjad1--;
                Console.Write(abjad1);
            }
            Console.Write("\n");
            abjad1 = 'A';
        }
    }
}