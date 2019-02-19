using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace gyak02
{
    class Tömörítő
    {
        public String Tömörít(String[] bemenet)
        {
            String kimenet = "";
            foreach (String sor in bemenet)
            {
                char típus = sor[0];
                int db = 1;

                for (int i = 1; i < sor.Length; i++)
                {
                    if (sor[i] == típus)
                    {
                        db++;
                    }
                    else
                    {
                        //if (db >= 4)
                        //{
                        //    kimenet += db + "/" + típus + " ";
                        //}
                        //else
                        //{
                        //    kimenet += new String(típus, db) + " ";
                        //}
                        kimenet += (db >= 4 ? db + "/" + típus : new String(típus, db)) + " ";
                        típus = sor[i];
                        db = 1;
                    }
                }

                kimenet += (db >= 4 ? db + "/" + típus : new String(típus, db)) + " ";
                kimenet += Environment.NewLine;
            }

            return kimenet;
        }

        public String Kitömörít(String[] bemenet)
        {
            string kimenet = "";

            foreach (String sor in bemenet) {
                string[] darabok = sor.Split(' ');

                foreach (String darab in darabok)
                {
                    string[] típusÉsDb = darab.Split('/');
                    if (típusÉsDb.Length == 1)
                    {
                        kimenet += típusÉsDb[0];
                    }
                    else
                    {
                        char típus = Convert.ToChar(típusÉsDb[1]);
                        int db = Convert.ToInt32(típusÉsDb[0]);
                        kimenet += new String(típus, db); // A `típus` karakter `db`-szor egymás után
                    }
                }

                kimenet += Environment.NewLine;
            }

            return kimenet;
        }
    }
}
