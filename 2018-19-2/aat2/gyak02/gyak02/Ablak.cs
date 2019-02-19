using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace gyak02
{
    public partial class Ablak : Form
    {
        public Ablak()
        {
            InitializeComponent();
        }

        private void TömörítGombKattintás(object sender, EventArgs e)
        {
            Tömörítő t = new Tömörítő();
            String[] bemenet = Tömörítetlen.Lines; // Beolvasás
            String kimenet = t.Tömörít(bemenet); // Feldolgozás
            Tömörített.Text = kimenet; // Kiírás
        }

        private void KitömörítGombKattintás(object sender, EventArgs e)
        {
            Tömörítő t = new Tömörítő();
            String[] bemenet = Tömörített.Lines; // Beolvasás
            String kimenet = t.Kitömörít(bemenet); // Feldolgozás
            Tömörítetlen.Text = kimenet; // Kiírás
        }
    }
}
