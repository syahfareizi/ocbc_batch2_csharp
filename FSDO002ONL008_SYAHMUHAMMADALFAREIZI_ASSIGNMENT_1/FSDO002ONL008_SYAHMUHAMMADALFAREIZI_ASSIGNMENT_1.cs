using System;

public class assignment1
{
    public static void Main(string[] args)
    {
        Console.WriteLine("====== SELAMAT DATANG DI ASSIGNMENT I ======");
        Console.WriteLine(" ");
        Console.WriteLine("Nama saya Syah Muhamamd Alfareizi");
        Console.WriteLine("Nomer peserta saya adalah FSDO002ONL008");
        Console.WriteLine("Alamat saya di Gresik, Jawa Timur");
        Console.WriteLine(" ");
        bool lagi = true;
        while (lagi == true)
        {
            Console.WriteLine("Menu Soal: ");
            Console.WriteLine("1. Mencetak piramida alfabet dengan ketinggian 5 baris.");
            Console.WriteLine("2. Mencetak piramida angka ( 1- 9 ) dengan ketinggian tertentu.");
            Console.WriteLine("3. Menghitung faktorial dari bilangan.");
            Console.WriteLine("4. Mencetak bilangan dengan kondisi terbalik ( 123 => 321 ).");
            Console.WriteLine("5. Mencetak bilangan dalam bentuk teks ( dalam bahasa inggris ).");
            Console.WriteLine("6. Tentang saya");
            Console.WriteLine("7. Keluar");
            Console.WriteLine(" ");
            Console.Write("Silahkan pilih soal untuk melihat jawaban : ");
            int pilihan = int.Parse(Console.ReadLine());
            switch (pilihan)
            {
                case 1:
                    Console.WriteLine("=== APLIKASI PENCETAK PIRAMIDA ABJAD ===");
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
                        for (y1 = 1; y1 < baris1; y1++)
                        {
                            abjad1--;
                            Console.Write(abjad1);
                        }
                        Console.Write("\n");
                        abjad1 = 'A';
                    }
                    break;
                case 2:
                    Console.WriteLine("=== APLIKASI PENCETAK PIRAMIDA ANGKA ===");
                    Console.WriteLine("Masukkan Jumlah bilangan :");
                    int input2 = int.Parse(Console.ReadLine());
                    int angka2 = 1;
                    int baris2, kolom2, x2, y2;
                    for (baris2 = 1; baris2 <= input2; baris2++)
                    {
                        //menambahkan whitespace
                        for (kolom2 = input2; kolom2 > baris2; kolom2--)
                            Console.Write(" ");
                        //mencetak angka hingga titik tengah tabel
                        for (x2 = 1; x2 <= baris2; x2++)
                        {
                            Console.Write(angka2);
                            angka2++;
                        }
                        angka2--;
                        for (y2 = 1; y2 < baris2; y2++)
                        {
                            angka2--;
                            Console.Write(angka2);
                        }
                        Console.Write("\n");
                        angka2 = 1;
                    }
                    break;
                case 3:
                    Console.WriteLine("=== APLIKASI PENGHITUNG FAKTORIAL ===");
                    int Angka;
                    Console.Write("Masukkan Angka : ");
                    Angka = int.Parse(Console.ReadLine());
                    Console.WriteLine($"Factorial of {Angka} is : {faktorial(Angka)}");
                    break;
                case 4:
                    Console.WriteLine("=== APLIKASI PEMBALIK URUTAN ANGKA ===");
                    string angkaawal4;
                    int x;
                    Console.WriteLine("Masukkan Angka :");
                    angkaawal4 = Console.ReadLine();
                    char[] angkaterbalik = new char[angkaawal4.Length];
                    for (int i = 1; i <= angkaawal4.Length; i++)
                    {
                        angkaterbalik[i - 1] = angkaawal4[i - 1];
                    }
                    Console.Write("Reversed Number : ");
                    for (var y = 1; y <= angkaterbalik.Length; y++)
                    {
                        x = angkaterbalik.Length - y;
                        Console.Write(angkaterbalik[x]);
                    }
                    break;
                case 5:
                    Console.WriteLine("=== APLIKASI PENCETAK ANGKA DALAM BENTUK TEKS ===");
                    string angkaawal;
                    Console.WriteLine("Masukkan Angka :");
                    angkaawal = Console.ReadLine();
                    char[] angkaalone = new char[angkaawal.Length];
                    for (int i = 1; i <= angkaawal.Length; i++)
                    {
                        angkaalone[i - 1] = angkaawal[i - 1];
                    }
                    foreach (var angka in angkaalone)
                    {
                        switch (angka)
                        {
                            case '1':
                                Console.Write("One ");
                                break;
                            case '2':
                                Console.Write("Two ");
                                break;
                            case '3':
                                Console.Write("Three ");
                                break;
                            case '4':
                                Console.Write("Four ");
                                break;
                            case '5':
                                Console.Write("Five ");
                                break;
                            case '6':
                                Console.Write("Six ");
                                break;
                            case '7':
                                Console.Write("Seven ");
                                break;
                            case '8':
                                Console.Write("Eight ");
                                break;
                            case '9':
                                Console.Write("Nine ");
                                break;
                            case '0':
                                Console.Write("Zero ");
                                break;
                            default:
                                Console.Write("Angka ? ");
                                break;
                        }
                    }
                    break;
                case 6:
                    Console.WriteLine("=== About Me ===");
                    Console.WriteLine("Nama saya Syah Muhamamd Alfareizi");
                    Console.WriteLine("Nomer peserta saya adalah FSDO002ONL008");
                    Console.WriteLine("Alamat saya di Gresik, Jawa Timur");
                    break;
                case 7:
                    break;
                default:
                    Console.WriteLine("Mohon maaf soal tidak tersedia.");
                    break;
            }
            Console.WriteLine("");
            Console.Write("Apakah ingin memilih soal kembali, jika tidak anda akan keluar dari aplikasi (y/n) ? ");
            string opsi = Console.ReadLine();
            switch (opsi)
            {
                case "Y":
                    lagi = true;
                    break;
                case "y":
                    lagi = true;
                    break;
                default:
                    lagi = false;
                    break;
            }

        }
        Console.WriteLine("Terima kasih.");
    }

    private static int faktorial(int bilangan)
    {
        if (bilangan != 0)
        {
            return bilangan = bilangan * faktorial(bilangan - 1);
        }
        else
        {
            return 1;
        }
    }
}