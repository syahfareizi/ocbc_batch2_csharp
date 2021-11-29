using System;

namespace program2
{
    public class Pesawat
    {
        public string nama;
        private string ketinggian;
        public string ketinggianterbang
        {
            get { return ketinggian; }
            set { ketinggian = value; }
        }

        public void terbang()
        {
            Console.WriteLine("Pesawat dengan nama {0}, sedang take off", this.nama);
        }
        public void sudahterbang()
        {
            Console.WriteLine("Pesawat sekarang berada pada ketinggian {0}", this.ketinggian);
        }
    }
}