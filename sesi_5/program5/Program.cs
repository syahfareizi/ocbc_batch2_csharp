using System;

namespace program5
{
    public class Program
    {
        public int bilangan1;
        public int bilangan2;
        public void bilangan(int angka1, int angka2)
        {
            bilangan1 = angka1;
            bilangan2 = angka2;
        }
        public virtual void penjumlahanPerkalian()
        {
            Console.WriteLine("Overriding 1............>>>>>>>>>.");
            Console.WriteLine("Hasil penjumlahan angka {0} dan angka {1} adalah {2}", bilangan1, bilangan2, bilangan1 + bilangan2);
            Console.WriteLine("Hasil perkalian angka {0} dan angka {1} adalah {2}", bilangan1, bilangan2, bilangan1 * bilangan2);
        }

    }
    class Program2 : Program
    {
        public override void penjumlahanPerkalian()
        {
            Console.WriteLine("Overriding 2............>>>>>>>>>.");
            Console.WriteLine("Hasil pembagian angka {0} dan angka {1} adalah {2}", bilangan1, bilangan2, bilangan1 / bilangan2);
            Console.WriteLine("Hasil pengurangan angka {0} dan angka {1} adalah {2}", bilangan1, bilangan2, bilangan1 - bilangan2);
        }
        static void Main(string[] args)
        {
            Program overiding = new Program();
            overiding.bilangan(10, 8);
            overiding.penjumlahanPerkalian();
            overiding = new Program2();
            overiding.bilangan(30, 4);
            overiding.penjumlahanPerkalian();
        }
    }

}
