using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gyakorlas
{
    class Program
    {
        // Függvény létrehozása (mint c++-ban)
        static int Faktoriális(int n)
        {
            int szorzat = 1;
            for (int i = 2; i <= n; i++)
            {
                // szorzat = szorzat * i;
                szorzat *= i;
            }
            // Függvény visszatérési értéke
            return szorzat;
        }

        static void Main(string[] args)
        {
            string nev;
            int eletkor;
            // Kiírás egy sorba
            Console.Write("Add meg a neved: ");
            // Szöveg beolvasása
            nev = Console.ReadLine();
            Console.Write("Add meg az életkorod: ");
            // Szám beolvasása
            eletkor = Convert.ToInt32(Console.ReadLine());
            // eletkor = int.Parse(Console.ReadLine());
            /* 
             * Többsoros komment
             */
            // Szöveg összefűzése
            Console.WriteLine(nev + " " + eletkor + " éves");

            // Elágazás
            if (eletkor < 18)
            {
                Console.WriteLine("Még gyerek vagy");
            }
            else
            {
                Console.WriteLine("Már felnőtt vagy");
            }

            Console.WriteLine(Faktoriális(5));

            int n;
            Console.Write("Add meg a darabszámot: ");
            n = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Adj meg " + n + " db számot!");
            // Tömb létrehozása
            int[] szamok = new int[n];
            for (int i = 0; i < n; i++)
            {
                szamok[i] = Convert.ToInt32(Console.ReadLine());
            }
            Console.WriteLine(Átlag(szamok));

            Console.WriteLine("Adj meg " + n + " db számot!");
            // Lista adatszerkezet - olyan, mint egy dinamikus méretű tömb
            List<int> szamok2 = new List<int>();
            for (int i = 0; i < n; i++)
            {
                int szam = Convert.ToInt32(Console.ReadLine());
                // Új elem hozzáadása a listához
                szamok2.Add(szam);
                //szamok2.Add(int.Parse(Console.ReadLine()));
            }
            // Ciklus, ami végimegy a szamok2 összes elemén
            foreach (int szam in szamok2)
            {
                Console.Write(szam + " ");
            }
            // Kézi sortörés + Eldöntés programozási tétel egy sorban
            Console.WriteLine("\n" + szamok2.Contains(5));
        }

        static double Átlag(int[] szamok)
        {
            int s = 0;
            for (int i = 0; i < szamok.Length; i++)
            {
                s += szamok[i];
            }
            // Ha nem lenne Convert, akkor egészosztás lenne
            return Convert.ToDouble(s) / szamok.Length;
        }
    }
}
