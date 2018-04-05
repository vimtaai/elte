using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace zh_feladat
{
    class Program
    {
        static bool Oho3(int x)
        {
            return x % 3 == 0;
        }

        static void Main(string[] args)
        {
            int kezdoertek, osszeg, n, d;
            // Számtani sorozat
            Random random = new Random();
            kezdoertek = random.Next(-10, 11);
            do
            {
                Console.Write("Add meg a sorozat elemszámát [1-1000]: ");
                n = Convert.ToInt32(Console.ReadLine());
                if (n <= 0 || n > 1000)
                {
                    Console.WriteLine("Hibás bemenet! Próbáld újra!");
                }
            } while (n <= 0 || n > 1000);
            Console.Write("Add meg a sorozat differenciáját: ");
            d = Convert.ToInt32(Console.ReadLine());
            List<int> sorozat = new List<int>();
            sorozat.Add(kezdoertek);
            for (int i = 1; i <= n - 1; i++)
            {
                //int ujelem = sorozat[i - 1] + d;
                int ujelem = sorozat.Last() + d;
                sorozat.Add(ujelem);
            }
            // Önellenőrzés
            //for (int i = 0; i < n; i++)
            //for (int i = 0; i < sorozat.Count; i++)
            //{
            //    Console.Write(sorozat[i] + " ");
            //}
            // Tételalkalmazás
            osszeg = 0;
            for (int i = 0; i < n; i++)
            {
                if (Oho3(sorozat[i]))
                {
                    osszeg += sorozat[i];
                }
            }

            //foreach (int elem in sorozat)
            //{
            //    if (elem % 3 == 0)
            //    {
            //        osszeg += elem;
            //    }
            //}
            Console.WriteLine("A sorozatban a hárommal osztható számok összege: " + osszeg);
        }
    }
}
