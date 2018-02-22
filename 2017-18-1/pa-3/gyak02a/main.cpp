#include <iostream>

using namespace std;

int main()
{
    /**
     * Kreditindex kiszámítása
     */

    // Be
    int kreditosszeg;
    // Ki
    double kreditindex;

    // Beolvasás
    cout << "Add meg a kreditosszeget: ";
    cin >> kreditosszeg;
    // Feldolgozás
    kreditindex = (double)kreditosszeg / 30;
    //kreditindex = kreditosszeg / 30.0;
    // Kiírás
    cout << "A kreditindex: " << kreditindex << endl;

    return 0;
}
