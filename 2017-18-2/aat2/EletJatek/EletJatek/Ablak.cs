using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace EletJatek
{
    public partial class Ablak : Form
    {
        Graphics vaszon;

        public Ablak()
        {
            InitializeComponent();
            vaszon = jatekTer.CreateGraphics();
            Szimulacio.KezdoAllapot();
            Szimulacio.Rajzol(vaszon, lepesekSzama);
        }
       
        private void jatekTer_Click(object sender, EventArgs e)
        {
            MouseEventArgs egerTulajdonsagok = (MouseEventArgs)e;
            int x = egerTulajdonsagok.X / Szimulacio.pxSzelesseg;
            int y = egerTulajdonsagok.Y / Szimulacio.pxMagassag;
            Szimulacio.jatekTabla[x][y] = Szimulacio.jatekTabla[x][y] == 1 ? 0 : 1;
            Szimulacio.Rajzol(vaszon, lepesekSzama);
        }

        private void idozito_Tick(object sender, EventArgs e)
        {
            Szimulacio.KovetkezoAllapot();
            Szimulacio.Rajzol(vaszon, lepesekSzama);
        }

        private void startGomb_Click(object sender, EventArgs e)
        {
            idozito.Enabled = true;
        }

        private void stopGomb_Click(object sender, EventArgs e)
        {
            idozito.Enabled = false;
        }

        private void torolGomb_Click(object sender, EventArgs e)
        {
            Szimulacio.KezdoAllapot();
            Szimulacio.Rajzol(vaszon, lepesekSzama);
        }

        private void lepeskozErtek_ValueChanged(object sender, EventArgs e)
        {
            idozito.Interval = Convert.ToInt32(lepeskozErtek.Value);
        }
    }
}
