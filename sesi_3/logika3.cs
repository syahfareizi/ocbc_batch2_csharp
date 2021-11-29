using System;

public class logika3
{
    public static void Main(string[] args)
    {
        string username;
        string password;

        Console.Write("Username :");
        username = Console.ReadLine();
        Console.Write("Password :");
        password = Console.ReadLine();

        if (username == "ocbc" && password == "bootcamp")
        {
            Console.WriteLine("Anda berhasil Login, Selamat datang " + username);
        }
        else
        {
            Console.WriteLine("Username atau Password anda salah, Anda tidak bisa login");
        }
    }
}