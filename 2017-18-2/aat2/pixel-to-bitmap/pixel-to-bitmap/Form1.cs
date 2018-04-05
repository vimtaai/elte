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

namespace pixel_to_bitmap
{
    public partial class Ablak : Form
    {
        public Ablak()
        {
            InitializeComponent();
        }

        private void Ablak_Load(object sender, EventArgs e)
        {
            List<List<Color>> kepAdat = new List<List<Color>>();
            StreamReader fajl = new StreamReader("bemenet.txt");
            while (!fajl.EndOfStream)
            {
                kepAdat.Add(new List<Color>());
                string[] sor = fajl.ReadLine().Trim().Split(' ');
                foreach (string szinKod in sor)
                {
                    string[] rgb = szinKod.Trim().Split(':');
                    Color szin = Color.FromArgb(
                        255,
                        Convert.ToByte(rgb[0]),
                        Convert.ToByte(rgb[1]),
                        Convert.ToByte(rgb[2])
                    );
                    kepAdat.Last().Add(szin);
                }
            }
            int szelesseg = kepAdat[0].Count;
            int magassag = kepAdat.Count;

            Bitmap kep = new Bitmap(szelesseg, magassag);
            for (int y = 0; y < magassag; y++)
            {
                for (int x = 0; x < szelesseg; x++)
                {
                    Color szin = Color.FromArgb(255, kepAdat[y][x]);
                    kep.SetPixel(x, y, szin);
                }
            }
            this.pictureBox1.Image = kep;
        }
    }
}
