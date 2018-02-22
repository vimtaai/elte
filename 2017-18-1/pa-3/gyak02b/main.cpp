#include <iostream>

using namespace std;

int main()
{

    /**
     * Szignum függvény
     */

    // Be
    double x;
    // Ki
    double sgn;

    // Beolvasás
    cout << "x = ";
    cin >> x;
    // Feldolgozás
    if (x < 0)
    {
        sgn = -1;
    }
    else if (x == 0)
    {
        sgn = 0;
    }
    else
    {
        sgn = 1;
    }
    // Kiírás
    cout << "sgn(x) = " << sgn << endl;

    return 0;
}
