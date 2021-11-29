using System;

public class jagged
{
    public static void Main(string[] args)
    {
        int[][] jagged = new int[3][];
        jagged[0] = new int[4];
        jagged[1] = new int[3];
        jagged[2] = new int[5];

        // static void myLoop(int x, int y)
        // {
        //     for (var i = 0; i < y; i++)
        //     {
        //         jagged[x][i] = i;
        //         Console.Write(jagged[x][i] + " ");
        //     }
        //     Console.WriteLine(" ");
        // }

        // myLoop(0, 4);
        // myLoop(1, 3);
        // myLoop(2, 5);
        for (var i = 0; i < 4; i++)
        {
            jagged[0][i] = i;
            Console.Write(jagged[0][i] + " ");
        }
        Console.WriteLine("");
        for (var i = 0; i < 3; i++)
        {
            jagged[1][i] = i;
            Console.Write(jagged[1][i] + " ");
        }
        Console.WriteLine("");
        for (var i = 0; i < 5; i++)
        {
            jagged[2][i] = i;
            Console.Write(jagged[2][i] + " ");
        }
        Console.WriteLine("");
    }

}