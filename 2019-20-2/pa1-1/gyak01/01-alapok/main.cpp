#include <iostream>

using namespace std;

int main()
{
    int eletkor; // Változó deklarálása

    cout << "Hany eves vagy? ";
    cin >> eletkor;
    cout << "Szia, te " << eletkor << " eves vagy." << endl;

    if (eletkor > 25)
    {
        cout << "Oreg vagy." << endl;
    }
    else
    {
        cout << "Meg fiatal vagy." << endl;
    }

    int a, b;

    cout << "Add meg az elso szamot: ";
    cin >> a;
    cout << "Add meg a masodik szamot: ";
    cin >> b;

    int osszeg = a + b;

    cout << "Az osszeg " << osszeg << "." << endl;
    cout << "Az osszeg " << a + b << "." << endl;

    string nev;
    cout << "Hogy hivnak? ";
    cin >> nev;

    cout << "Szia, " + nev << endl;

    // double hanyados = 1.0 * a / b;
    double hanyados = (double)a / b;

    cout << "A hanyados " << hanyados << "." << endl;

    return 0;
}
