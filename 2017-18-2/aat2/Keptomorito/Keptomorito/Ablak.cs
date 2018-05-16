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

namespace Keptomorito
{
    using KepSor = List<Pixel>;
    using Kep = List<List<Pixel>>;

    public partial class Ablak : Form
    {
        Bitmap bitmap;
        Kep kep;

        public Ablak()
        {
            InitializeComponent();
        }

        // Segédfüggvények
        private Bitmap KepBetolt(Kep kep)
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

        private void FajlbaKiir(string fajlNev, string tartalom)
        {
            string kiterjesztes = fajlNev.Split('.').Last();

            StreamWriter file = new StreamWriter(fajlNev);

            file.Write(tartalom);

            file.Close();
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

                bitmap = new Bitmap(kepFajl);

                kepHelye.Image = bitmap;
            }
        }

        private void mentesMaskentToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (bitmap != null)
            {
                DialogResult result = fajlMento.ShowDialog();

                if (result == DialogResult.OK)
                {
                    string fajlNev = fajlMento.FileName;
                    string kiterjesztes = fajlNev.Split('.').Last();
                    string tartalom = "";

                    if (kiterjesztes == "kep")
                    {
                        for (int y = 0; y < bitmap.Height; y++)
                        {
                            for (int x = 0; x < bitmap.Width; x++)
                            {
                                Color szin = bitmap.GetPixel(x, y);
                                tartalom += szin.R + ":" + szin.G + ":" + szin.B + " ";
                            }
                            tartalom += "\n";
                        }
                    }
                    else if (kiterjesztes == "tkep")
                    {
                        kep = new Kep();

                        for (int y = 0; y < bitmap.Height; y++)
                        {
                            kep.Add(new KepSor());
                            for (int x = 0; x < bitmap.Width; x++)
                            {
                                Color szin = bitmap.GetPixel(x, y);
                                kep[y].Add(Pixel.FromString(szin.R + ":" + szin.G + ":" + szin.B));
                            }
                        }

                        tartalom = Tomorito.TomoritMatrix(kep);
                    }

                    FajlbaKiir(fajlNev, tartalom);
                }
            }
        }
    }
}
