using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kepmegjelenito
{
    class Pixel
    {
        public int R, G, B;

        public static bool operator ==(Pixel a, Pixel b)
        {
            return a.R == b.R && a.G == b.G && a.B == b.B;
        }

        public static bool operator !=(Pixel a, Pixel b)
        {
            return !(a == b);
        }

        public static Pixel FromString(string s)
        {
            string[] szinek = s.Split(':');
            return new Pixel
            {
                R = Convert.ToInt32(szinek[0]),
                G = Convert.ToInt32(szinek[1]),
                B = Convert.ToInt32(szinek[2])
            };
        }

        public override string ToString()
        {
            return R + ":" + G + ":" + B;
        }

        public Color ToColor()
        {
            return Color.FromArgb(255, R, G, B);
        }
    }
}
