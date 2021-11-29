using System;

namespace program1
{
    class Program
    {
        static void Main(string[] args)
        {
            Laptop laptop1 = new Laptop();
            // laptop1.merk = "Lenovo";
            // laptop1.ram = 4;
            // laptop1.memory = 128;
            Console.Write("Masukkan Nama Merk Laptop :");
            laptop1.merk = Console.ReadLine();
            Console.Write("Masukkan Jumlah RAM :");
            laptop1.ram = int.Parse(Console.ReadLine());
            Console.Write("Masukkan jumlah memory :");
            laptop1.memory = int.Parse(Console.ReadLine());

            Console.WriteLine("Laptop ini memiliki merk {0}", laptop1.merk);
            Console.WriteLine("Laptop ini memiliki kapasitas ram sebesar {0} GB ", laptop1.ram);
            Console.WriteLine("Laptop ini memiliki kapasitas memory {0} GB", laptop1.memory);

            laptop1.chatting();
            laptop1.sosmed();
            laptop1.onlineShop();

        }
    }
}
