using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Kepmegjelenito
{
    public partial class Form1 : Form
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

        public Form1()
        {
            InitializeComponent();
        }

        private Color PixelToColor(Pixel pixel)
        {
            return Color.FromArgb(255, pixel.R, pixel.G, pixel.B);
        }

        private void KepBetolt(List<List<Pixel>> kep)
        {
            Bitmap vaszon = new Bitmap(kep[0].Count, kep.Count);

            for (int y = 0; y < kep.Count; y++)
            {
                List<Pixel> sor = kep[y];
                for (int x = 0; x < sor.Count; x++)
                {
                    Pixel pixel = kep[y][x];
                    vaszon.SetPixel(x, y, PixelToColor(pixel));
                }
            }

            this.kep.Image = vaszon;
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

        private void Form1_Load(object sender, EventArgs e)
        {
            
        }

        private void kilépésToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void megnyitásToolStripMenuItem_Click(object sender, EventArgs e)
        {
            DialogResult result = this.openFileDialog1.ShowDialog();
            if (result == DialogResult.OK)
            {
                List<List<Pixel>> kep = new List<List<Pixel>>();
                string kepFajl = this.openFileDialog1.FileName;
                string kiterjesztes = kepFajl.Split('.').Last();
                StreamReader file = new StreamReader(kepFajl);
                if (kiterjesztes == "kep")
                {
                    while (!file.EndOfStream)
                    { 
                        List<Pixel> pixelSor = new List<Pixel>();
                        string sor = file.ReadLine();
                        string[] pixelek = sor.Trim().Split(' ');
                        foreach (string pixel in pixelek)
                        {
                            pixelSor.Add(Pixel.FromString(pixel));
                        }
                        kep.Add(pixelSor);
                    }
                }
                else
                {
                    string tomoritett = file.ReadToEnd();
                    kep = Kitomorit(tomoritett);
                }

                KepBetolt(kep);
            }
        }
    }
}
