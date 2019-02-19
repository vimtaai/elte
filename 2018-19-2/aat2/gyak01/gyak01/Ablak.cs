using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace gyak01
{
    public partial class Ablak : Form
    {
        public Ablak()
        {
            InitializeComponent();
        }

        private void TömörítGombKattintás(object sender, EventArgs e)
        {
            // Beolvasás
            String bemenet = BemenetiMező.Text;
            String kimenet;

            // Feldolgozás (Tizes számrendszerbe váltás)
            int hossz = bemenet.Length;
            double aktuális = 0;

            for (int i = 0; i < hossz; i++)
            {
                if (bemenet[hossz - i - 1] == '1')
                {
                    aktuális = aktuális + Math.Pow(2, i);
                }
            }

            kimenet = aktuális.ToString();

            // Kiírás (Tizes számrendszerbe váltás)
            SzámrendeszerKimenetiMező.Text = kimenet;

            // Feldolgozás (Darabszámolás)
            kimenet = "";
            char típus = bemenet[0];
            kimenet += típus;
            int db = 1;

            for (int i = 1; i < hossz; i++)
            {
                if (bemenet[i] == típus)
                {
                    db++;
                }
                else
                {
                    kimenet += " " + db.ToString();
                    db = 1;
                    típus = bemenet[i];
                }
            }

            kimenet += " " + db.ToString(); // Az utolsó darabot is hozzáírjuk

            // Kiírás (Darabszámolás)
            DarabszámKimenetiMező.Text = kimenet;
        }
    }
}
