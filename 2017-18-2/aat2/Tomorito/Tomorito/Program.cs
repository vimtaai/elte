using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tomorito
{
    class Program
    {
        public static string TomoritDarab(int elem, int db)
        {
            string tomoritettElem = "";

            if (db > 4)
            {
                tomoritettElem = "#" + db + "#" + elem;
            }
            else if (db > 0)
            {
                for (int i = 0; i < db; i++)
                {
                    tomoritettElem += elem;
                }
            }

            return tomoritettElem;
        }

        public static string TomoritSor(List<int> sor)
        {
            string tomoritettSor = "";
            int db = 0;

            int elozo = new int();

            foreach (int aktualis in sor)
            {
                if (aktualis == elozo)
                {
                    db++;
                }
                else
                {
                    tomoritettSor += TomoritDarab(elozo, db);
                    db = 1;
                    elozo = aktualis;
                }
            }
            tomoritettSor += TomoritDarab(elozo, db);

            return tomoritettSor;
        }

        public static string KitomoritDarab(int elem, int db)
        {
            string kitomoritettElem = "";

            for (int i = 0; i < db; i++)
            {
                kitomoritettElem += elem + " ";
            }

            return kitomoritettElem;
        }

        public static List<int> KitomoritSor(string tomoritettSor)
        {
            bool p = false, q = false;
            string db = "";
            List<int> kitomoritettSor = new List<int>();

            for (int i = 0; i < tomoritettSor.Length; i++)
            {
                if (tomoritettSor[i] == '#')
                {
                    if (!p)
                    {
                        p = true;
                    }
                    else
                    {
                        q = true;
                    }
                }
                else
                {
                    string aktualis = tomoritettSor[i].ToString();

                    if (!p && !q)
                    {
                        kitomoritettSor.Add(Convert.ToInt32(aktualis));
                    }
                    else if (p && !q)
                    {
                        db += aktualis;
                    }
                    else
                    {
                        for (int j = 0; j < Convert.ToInt32(db); j++)
                        {
                            kitomoritettSor.Add(Convert.ToInt32(aktualis));
                        }
                        p = q = false;
                        db = "";
                    }
                }
            }

            return kitomoritettSor;
        }

        static void Main(string[] args)
        {
            Console.Write("Add meg a tömörítendő számsort: ");
            string bemenet = Console.ReadLine();

            List<int> szamsor = new List<int>();
            for (int i = 0; i < bemenet.Length; i++)
            {
                szamsor.Add(Convert.ToInt32(bemenet[i].ToString()));
            }
            string tomoritett = TomoritSor(szamsor);

            Console.WriteLine(tomoritett);
            List<int> kitomoritett = KitomoritSor(tomoritett);
            string eredmeny = "";
            foreach (int szam in kitomoritett)
            {
                eredmeny += szam;
            }
            Console.WriteLine(eredmeny);
            Console.WriteLine("A tömörítés mértéke: " + ((float)tomoritett.Length / eredmeny.Length * 100) + "%");
        }
    }
}
