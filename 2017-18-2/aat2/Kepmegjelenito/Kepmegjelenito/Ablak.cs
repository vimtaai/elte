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
    using KepSor = List<Pixel>;
    using Kep = List<List<Pixel>>;

    public partial class Ablak : Form
    {

        Bitmap vaszon;

        public Ablak()
        {
            InitializeComponent();
        }

        // Segédfüggvények
        private static Bitmap KepBetolt(Kep kep)
        {
            int szelesseg = kep.First().Count;
            int magassag = kep.Count;

            Bitmap vaszon = new Bitmap(szelesseg, magassag);

            for (int y = 0; y < magassag; y++)
            {
                KepSor sor = kep[y];
                for (int x = 0; x < szelesseg; x++)
                {
                    Pixel pixel = kep[y][x];
                    vaszon.SetPixel(x, y, pixel.ToColor());
                }
            }

            return vaszon;
        }

        // Eseménykezelők
        private void kilepesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Close();
        }

        private void megnyitasToolStripMenuItem_Click(object sender, EventArgs e)
        {
            DialogResult result = fajlMegnyito.ShowDialog();

            if (result == DialogResult.OK)
            {
                string kepFajl = fajlMegnyito.FileName;
                string kiterjesztes = kepFajl.Split('.').Last();

                StreamReader file = new StreamReader(kepFajl);
                Kep kep = new Kep();

                if (kiterjesztes == "kep")
                {
                    while (!file.EndOfStream)
                    { 
                        KepSor pixelSor = new KepSor();
                        string sor = file.ReadLine();
                        string[] pixelek = sor.Trim().Split(' ');
                        foreach (string pixel in pixelek)
                        {
                            pixelSor.Add(Pixel.FromString(pixel));
                        }
                        kep.Add(pixelSor);
                    }
                }
                else if (kiterjesztes == "tkep")
                {
                    string tomoritett = file.ReadToEnd();
                    kep = Tomorito.KitomoritMatrix(tomoritett);
                }

                file.Close();
                kepHelye.Image = KepBetolt(kep);
            }
        }
    }
}
