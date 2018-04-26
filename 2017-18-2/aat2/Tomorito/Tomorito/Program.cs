using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tomorito
{
    class Pixel
    {
        public int R, G, B;

        public static Pixel FromString(string s)
        {
            List<string> szinek = new List<string>(s.Split(':'));
            return new Pixel
            {
                R = Convert.ToInt32(szinek[0]),
                G = Convert.ToInt32(szinek[1]),
                B = Convert.ToInt32(szinek[2])
            };
        }

        public static bool operator ==(Pixel a, Pixel b)
        {
            return a.R == b.R && a.G == b.G && a.B == b.B;
        }

        public static bool operator !=(Pixel a, Pixel b)
        {
            return !(a == b);
        }

        public override string ToString()
        {
            return R + ":" + G + ":" + B;
        }
    }

    class Program
    {
        static string TomoritReszlet(Pixel elem, int db)
        {
            if (db > 1)
            {
                return db + "#" + elem + " ";
            }
            else if (db != 0)
            {
                return elem + " ";
            }
            else
            {
                return "";
            }
        }

        static string TomoritSor(List<Pixel> sor)
        {
            string tomoritett = "";
            int db = 0;
            Pixel elozo = new Pixel();

            foreach (Pixel aktualis in sor)
            {
                if (aktualis == elozo)
                {
                    db++;
                }
                else
                {
                    tomoritett += TomoritReszlet(elozo, db);
                    db = 1;
                    elozo = aktualis;
                }
            }
            tomoritett += TomoritReszlet(elozo, db);
            return tomoritett;
        }

        static string Tomorit(List<List<Pixel>> matrix)
        {
            string tomoritett = "";
            foreach (List<Pixel> sor in matrix)
            {
                tomoritett += TomoritSor(sor);
            }
            return tomoritett;
        }

        static string KitomoritDarab(Pixel elem, int db)
        {
            string reszlet = "";
            for (int i = 0; i < db; i++)
            {
                reszlet += elem + " ";
            }
            return reszlet;
        }

        static List<Pixel> KitomoritSor(string tomoritettSor)
        {
            List<Pixel> kitomoritettSor = new List<Pixel>();
            List<string> darabok = new List<string>(tomoritettSor.Trim().Split(' '));
            foreach (string darab in darabok)
            {
                if (darab.Contains("#"))
                {
                    List<string> reszek = new List<string>(darab.Split('#'));
                    int db = Convert.ToInt32(reszek[0]);
                    Pixel elem = Pixel.FromString(reszek[1]);
                    for (int i = 0; i < db; i++)
                    {
                        kitomoritettSor.Add(elem);
                    } 
                }
                else
                {
                    kitomoritettSor.Add(Pixel.FromString(darab));
                }
            }
            return kitomoritettSor;
        }

        static List<List<Pixel>> Kitomorit(string tomoritettMatrix)
        {
            List<List<Pixel>> kitomoritettMatrix = new List<List<Pixel>>();
            List<string> sorok = new List<string>(tomoritettMatrix.Trim().Split('\n'));
            foreach (string sor in sorok)
            {
                kitomoritettMatrix.Add(KitomoritSor(sor));
            }
            return kitomoritettMatrix;
        }

        static void Main(string[] args)
        {
            List<List<Pixel>> kep = new List<List<Pixel>>();
            Console.Write("Add meg a képfájl nevét: ");
            string kepFajl = Console.ReadLine().Trim();
            StreamReader file = new StreamReader(kepFajl);
            while (!file.EndOfStream)
            {
                List<Pixel> pixelsor = new List<Pixel>();
                string sor = file.ReadLine();
                string[] pixelek = sor.Trim().Split(' ');
                foreach (string pixel in pixelek)
                {
                    pixelsor.Add(Pixel.FromString(pixel));
                }
                kep.Add(pixelsor);
            }

            Console.WriteLine("Betömörítés...");
            string tomoritett = Tomorit(kep);
            Console.WriteLine("A tömörített kép:");
            Console.WriteLine(tomoritett);

            Console.WriteLine("Kitömörítés...");
            List<List<Pixel>> kitomoritettKep = Kitomorit(tomoritett);
            string kitomoritett = "";
            foreach (List<Pixel> sor in kitomoritettKep)
            {
                foreach(Pixel elem in sor)
                {
                    kitomoritett += elem + " ";
                }
            }
            Console.WriteLine("A kitömörített kép:");
            Console.WriteLine(kitomoritett);
        }
    }
}
