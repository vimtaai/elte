using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Keptomorito
{
    using KepSor = List<Pixel>;
    using Kep = List<List<Pixel>>;

    class Tomorito
    {
        public static string TomoritDarab(Pixel elem, int db)
        {
            string tomoritettElem = "";

            if (db > 1)
            {
                tomoritettElem = db + "#" + elem + " ";
            }
            else if (db != 0)
            {
                tomoritettElem = elem + " ";
            }

            return tomoritettElem;
        }

        public static string TomoritSor(KepSor sor)
        {
            string tomoritettSor = "";
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
                    tomoritettSor += TomoritDarab(elozo, db);
                    db = 1;
                    elozo = aktualis;
                }
            }
            tomoritettSor += TomoritDarab(elozo, db);

            return tomoritettSor;
        }

        public static string TomoritMatrix(Kep matrix)
        {
            string tomoritettMatrix = "";

            foreach (KepSor sor in matrix)
            {
                tomoritettMatrix += TomoritSor(sor) + "\n";
            }

            return tomoritettMatrix;
        }

        public static string KitomoritDarab(Pixel elem, int db)
        {
            string kitomoritettElem = "";

            for (int i = 0; i < db; i++)
            {
                kitomoritettElem += elem + " ";
            }

            return kitomoritettElem;
        }

        public static KepSor KitomoritSor(string tomoritettSor)
        {
            KepSor kitomoritettSor = new KepSor();

            string[] darabok = tomoritettSor.Trim().Split(' ');
            foreach (string darab in darabok)
            {
                if (darab.Contains("#"))
                {
                    string[] reszek = darab.Split('#');

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

        public static Kep KitomoritMatrix(string tomoritettKep)
        {
            Kep kitomoritettMatrix = new Kep();

            string[] sorok = tomoritettKep.Trim().Split('\n');
            foreach (string sor in sorok)
            {
                kitomoritettMatrix.Add(KitomoritSor(sor));
            }

            return kitomoritettMatrix;
        }
    }
}
