using System;

namespace program3
{
    public class Pesawat
    {
        public string nama;
        public string ketinggian { get; set; }
        public string jumlahPenumpang { get; set; }
        public int jumlahRoda { get; set; }

        public void terbang()
        {
            Console.WriteLine("Pesawat dengan nama {0}, sedang take off",
            this.nama);
        }
    }
    public class Pswttempur : Pesawat
    {
        public void terbangtinggi()
        {
            Console.WriteLine("Pesawat tempur dengan nama {0}\n" +
                                "yang mempunyai roda {1},\n" +
                                "sedang berada pada ketinggian {2} dengan membawa penumpang sebanyak {3},\n" +
                                "akan meledakkan senjata\n",
            this.nama,
            this.jumlahRoda,
            this.ketinggian,
            this.jumlahPenumpang);
        }
    }
}