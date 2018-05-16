using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Labda
{
    public partial class Ablak : Form
    {
        Graphics vaszon;

        public Ablak()
        {
            InitializeComponent();
            vaszon = jatekTer.CreateGraphics();
            Szimulacio.KezdoAllapot();
            Szimulacio.Rajzol(vaszon);
        }

        private void idozito_Tick(object sender, EventArgs e)
        {
            Szimulacio.KovetkezoAllapot((float)idozito.Interval / 1000, (float)xGravitacio.Value, (float)yGravitacio.Value);
            Szimulacio.Rajzol(vaszon);
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
            Szimulacio.Rajzol(vaszon);
        }


        private void ujLabdaGomb_Click(object sender, EventArgs e)
        {
            Szimulacio.UjLabda();
        }

    }
}
