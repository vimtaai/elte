#include <iostream>

using namespace std;

// Szignatúra
int str_to_int(string szam)
{
    int eredmeny = 0;
    bool negativ_e = szam[0] == '-';

    int kezdo = negativ_e ? 1 : 0;
    // Ternary operator (?:)
    // Feltételes kifejezés
    // Excel HA függvény
    for (int i = kezdo; i < szam.length(); i += 1)
    {
        eredmeny *= 10;
        eredmeny += (int)(szam[i] - '0');
    }

    return negativ_e ? eredmeny * -1 : eredmeny;
}

int main()
{
    // Be
    string bemenet;
    // Ki
    int kimenet;

    // Beolvasás
    cin >> bemenet;

    // Feldolgozás
    kimenet = str_to_int(bemenet);

    // Kiírás
    cout << kimenet << endl;

    return 0;
}
