using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace szamsor_tomorit
{
    class Program
    {
        static string Tomorit(int szam, int db)
        {
            if (db > 4)
            {
                return "/" + db + "/" + szam;
            }
            else
            {
                string eredmeny = "";
                for (int i = 0; i < db; i++)
                {
                    eredmeny += szam;
                }
                return eredmeny;
            }
        }
        static void Main(string[] args)
        {
            // Beolvasás
            string szamsor;
            Console.Write("Add meg a tömörítendő számsort: ");
            szamsor = Console.ReadLine();
            // Önellenőrzés
            Console.WriteLine(Tomorit(1, 5));
            Console.WriteLine(Tomorit(4, 3));
            Console.WriteLine(Tomorit(9, 6));
            Console.WriteLine(Tomorit(6, 0));
            // Feldolgozás
            // Kiírás
        }
    }
}
