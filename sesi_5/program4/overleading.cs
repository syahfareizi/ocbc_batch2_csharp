using System;

namespace program4
{
    public class Data
    {
        public string nama { get; set; }
        public double nomer_telepon { get; set; }
        public void print(string nama)
        {
            this.nama = nama;
            Console.WriteLine("Nama saya adalah {0}", this.nama);
        }
        public void printtelepon(double nomertelepon)
        {
            this.nomer_telepon = nomertelepon;
            Console.WriteLine("Nomer telepon saya adalah : {0}", this.nomer_telepon);
        }

    }
}