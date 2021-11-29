using System;
public class HitungNilai4
{
    public static void Main(string[] args)
    {
        Console.Write("Enter your age: ");
        int age = int.Parse(Console.ReadLine());
        Console.Write("Enter your Password: ");
        string password = Console.ReadLine();

        bool isAdult = age > 18;
        bool isPasswordValid = password == "OCBC";

        if (isAdult && isPasswordValid)
        {
            Console.WriteLine("Welcome to the Club");
        }
        else
        {
            Console.WriteLine("Sorry, Try Again! ");
        }
    }
}