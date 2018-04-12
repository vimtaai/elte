using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace szamsor_tomorit
{
    class Pixel
    {
        public int R, G, B;

        public static bool operator==(Pixel a, Pixel b)
        {
            return (a.R == b.R && a.G == b.G && a.B == b.B);
        }

        public static bool operator!=(Pixel a, Pixel b)
        {
            return !(a == b);
        }

        override public string ToString()
        {
            return R + " " + G + " " + B;
        }
    }

    class Program
    {
        static string TomoritReszlet(int szam, int db)
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

        static string Tomorit(string szamsor)
        {
            string tomoritett = "";
            int szamjegy = -1, db = 0;
            for (int i = 0; i < szamsor.Length; i++)
            {
                int aktualisSzamjegy = Convert.ToInt32(szamsor[i].ToString());

                if (aktualisSzamjegy == szamjegy)
                {
                    db++;
                }
                else
                {
                    tomoritett += TomoritReszlet(szamjegy, db);
                    db = 1;
                    szamjegy = aktualisSzamjegy;
                }
            }
            tomoritett += TomoritReszlet(szamjegy, db);
            return tomoritett;
        }

        static string KitomoritReszlet(int szam, int db)
        {
            string eredmeny = "";
            for (int i = 1; i <= db; ++i)
            {
                eredmeny += szam;
            }
            return eredmeny;
        }

        static string Kitomorit(string tomoritett)
        {
            bool p1 = false, p2 = false;
            string db2 = "";
            string kitomoritett = "";
            int szamjegy2;
            for (int i = 0; i < tomoritett.Length; i++)
            {
                if (tomoritett[i] == '/')
                {
                    if (!p1)
                    {
                        p1 = true;
                    }
                    else
                    {
                        p2 = true;
                    }
                }
                else
                {
                    if (!p1 && !p2)
                    {
                        kitomoritett += tomoritett[i];
                    }
                    else if (p1 && !p2)
                    {
                        db2 += tomoritett[i];
                    }
                    else if (p1 && p2)
                    {
                        szamjegy2 = Convert.ToInt32(tomoritett[i].ToString());
                        for (int j = 1; j <= Convert.ToInt32(db2); j++)
                        {
                            kitomoritett += szamjegy2;
                        }
                        p1 = false;
                        p2 = false;
                        db2 = "";
                    }
                }
            }
            return kitomoritett;
        }

        static void Main(string[] args)
        {
            // Beolvasás
            string szamsor;
            Console.Write("Add meg a tömörítendő számsort: ");
            szamsor = Console.ReadLine();

            // Feldolgozás
            string tomoritett = Tomorit(szamsor);
            // Kiírás
            Console.WriteLine("A tömörített számsor: " + tomoritett);
            Console.WriteLine("A tömörítés utáni méret: " + 
                              Convert.ToDouble(tomoritett.Length) /
                              Convert.ToDouble(szamsor.Length) * 100 + "%");

            // Visszaalakítás
            string kitomoritett = Kitomorit(tomoritett);
            // Kiírás
            Console.WriteLine("A kitömörített változat: " + kitomoritett);
        }
    }
}
