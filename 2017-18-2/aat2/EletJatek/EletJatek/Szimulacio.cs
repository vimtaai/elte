using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EletJatek
{
    class Szimulacio
    {
        // Konstansok
        public const int szelesseg = 50;
        public const int magassag = 50;
        public const int pxSzelesseg = 500 / szelesseg;
        public const int pxMagassag = 500 / magassag;

        // Változók
        public static int[][] jatekTabla;
        public static int lepesSzam;

        // Segédfüggvények
        public static int szamolSzomszed(int x, int y)
        {
            int db = 0;
            for (int i = -1; i <= 1; i++)
            {
                for (int j = -1; j <= 1; j++)
                {
                    // benn vagyok-e még a játéktéren
                    if ((x + i >= 0) && (x + i < szelesseg) &&
                        (y + j >= 0) && (y + j < magassag))
                    {
                        if (jatekTabla[x + i][y + j] > 0 && !(i == 0 && j == 0))
                        {
                            db++;
                        }
                    }
                }
            }
            return db;
        }

        // Szimulációs függvények
        public static void KezdoAllapot()
        {
            lepesSzam = 0;
            jatekTabla = new int[szelesseg][];
            for (int i = 0; i < szelesseg; i++)
            {
                jatekTabla[i] = new int[magassag];
            }
        }

        public static void KovetkezoAllapot()
        {
            lepesSzam++;

            // megjelölöm aki meghal
            for (int x = 0; x < szelesseg; x++)
            {
                for (int y = 0; y < magassag; y++)
                {
                    int szomszedSzam = szamolSzomszed(x, y);
                    if (jatekTabla[x][y] == 1 && (szomszedSzam < 2 || szomszedSzam > 3))
                    {
                        jatekTabla[x][y] = 2;
                    }
                }
            }

            // új sejtek születnek
            for (int x = 0; x < szelesseg; x++)
            {
                for (int y = 0; y < magassag; y++)
                {
                    int szomszedSzam = szamolSzomszed(x, y);
                    if (jatekTabla[x][y] == 0 && szomszedSzam == 3)
                    {
                        jatekTabla[x][y] = -1;
                    }
                }
            }

            // meghalnak a megjelölt sejtek
            for (int x = 0; x < szelesseg; x++)
            {
                for (int y = 0; y < magassag; y++)
                {
                    if (jatekTabla[x][y] == 2)
                    {
                        jatekTabla[x][y] = 0;
                    }
                    if (jatekTabla[x][y] == -1)
                    {
                        jatekTabla[x][y] = 1;
                    }
                }
            }
        }

        public static void Rajzol(Graphics vaszon, Label lepesekSzama)
        {
            lepesekSzama.Text = lepesSzam.ToString();

            Brush ecset = new SolidBrush(Color.Black);
            vaszon.Clear(Color.White);

            for (int x = 0; x < szelesseg; x++)
            {
                for (int y = 0; y < magassag; y++)
                {
                    if (jatekTabla[x][y] == 1)
                    {
                        vaszon.FillRectangle(ecset, x * pxSzelesseg, y * pxMagassag, pxSzelesseg, pxMagassag);
                    }

                    //string db = szamolSzomszed(x, y).ToString();
                    //vaszon.DrawString(db, new Font("arial", 7), new SolidBrush(Color.Red), x * pxSzelesseg, y * pxMagassag);
                }
            }
        }
    }
}
