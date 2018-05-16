using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Labda
{
    class Szimulacio
    {
        // Konstansok
        public const float sugar = 5;
        public const int palyaSzelesseg = 500;
        public const int palyaMagassag = 500;

        // Változók
        public static List<Labda> labdak;
        public static int piros, kek, zold;

        // Osztályok
        public class Labda
        {
            public float x, y, vx, vy;
        }

        // Segédfüggvények
        public static void UjLabda()
        {
            labdak.Add(new Labda
            {
                x = 100,
                y = 100,
                vx = 150,
                vy = 300
            });
        }

        // Szimulációs függvények
        public static void KezdoAllapot()
        {
            labdak = new List<Labda>();

            piros = 255;
            kek = 128;
            zold = 0;
        }

        public static void KovetkezoAllapot(float elteltIdo, float xGravitacio, float yGravitacio)
        {
            float t =  elteltIdo;
            float gx = xGravitacio;
            float gy = yGravitacio;

            foreach (Labda labda in labdak)
            {
                labda.x += labda.vx * t; // x irányú elmozdulás
                labda.vx += gx * t;
                labda.y += labda.vy * t + gy / 2 * t * t; // y irányú elmozdulás
                labda.vy += gy * t;

                piros = (piros + 1) % 255;
                kek = (kek + 2) % 255;
                zold = (zold + 3) % 255;

                if (labda.x >= palyaSzelesseg || labda.x <= 0)
                {
                    labda.vx *= -1;
                }
                if (labda.y >= palyaMagassag || labda.y <= 0)
                {
                    labda.vy *= -1;
                }
            }
        }

        public static void Rajzol(Graphics vaszon)
        {
            Color szin = Color.FromArgb(255, piros, kek, zold);
            SolidBrush ecset = new SolidBrush(szin);
            vaszon.Clear(Color.White);

            foreach (Labda labda in labdak)
            {
                vaszon.FillEllipse(ecset, labda.x - sugar, labda.y - sugar, sugar * 2, sugar * 2);
            }
        }
    }
}
